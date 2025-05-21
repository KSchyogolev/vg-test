import type { Letter } from '../lib/types'

const DB_NAME = 'lettersDB'
const STORE_NAME = 'letters'
const DB_VERSION = 1

const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION)

        request.onerror = () => {
            reject('Error opening database')
        }

        request.onsuccess = () => {
            resolve(request.result)
        }

        request.onupgradeneeded = () => {
            const db = request.result
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id' })
            }
        }
    })
}

export const lettersIndexedDbStorage = {
    getLetters: async (): Promise<Letter[]> => {
        try {
            const db = await openDB()
            return new Promise((resolve) => {
                const transaction = db.transaction(STORE_NAME, 'readonly')
                const store = transaction.objectStore(STORE_NAME)
                const request = store.getAll()

                request.onsuccess = () => {
                    resolve(request.result || [])
                }

                request.onerror = () => {
                    console.error('Error getting letters from IndexedDB')
                    resolve([])
                }

                transaction.oncomplete = () => {
                    db.close()
                }
            })
        } catch (error) {
            console.error('Error getting letters from IndexedDB:', error)
            return []
        }
    },

    saveLetters: async (letters: Letter[]): Promise<void> => {
        try {
            const db = await openDB()
            const transaction = db.transaction(STORE_NAME, 'readwrite')
            const store = transaction.objectStore(STORE_NAME)

            store.clear()

            letters.forEach((letter) => {
                store.add(letter)
            })

            transaction.oncomplete = () => {
                db.close()
            }
        } catch (error) {
            console.error('Error saving letters to storage:', error)
        }
    },

    addLetter: async (letter: Letter): Promise<void> => {
        try {
            const db = await openDB()
            const transaction = db.transaction(STORE_NAME, 'readwrite')
            const store = transaction.objectStore(STORE_NAME)

            store.add(letter)

            transaction.oncomplete = () => {
                db.close()
            }
        } catch (error) {
            console.error('Error adding letter to IndexedDB:', error)
        }
    },

    removeLetterById: async (id: string): Promise<void> => {
        try {
            const db = await openDB()
            const transaction = db.transaction(STORE_NAME, 'readwrite')
            const store = transaction.objectStore(STORE_NAME)

            store.delete(id)

            transaction.oncomplete = () => {
                db.close()
            }
        } catch (error) {
            console.error('Error removing letter from IndexedDB:', error)
        }
    },

    updateLetter: async (
        id: string,
        updatedLetter: Partial<Letter>
    ): Promise<void> => {
        try {
            const db = await openDB()
            const transaction = db.transaction(STORE_NAME, 'readwrite')
            const store = transaction.objectStore(STORE_NAME)

            // Получаем текущую версию письма
            const getRequest = store.get(id)

            getRequest.onsuccess = () => {
                if (getRequest.result) {
                    // Объединяем текущее письмо с обновлениями
                    const letter = { ...getRequest.result, ...updatedLetter }
                    store.put(letter)
                }
            }

            transaction.oncomplete = () => {
                db.close()
            }
        } catch (error) {
            console.error('Error updating letter in IndexedDB:', error)
        }
    },
}
