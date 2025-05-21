import { create } from 'zustand'
import type { Letter } from '../lib/types'
import { lettersIndexedDbStorage as lettersStorage } from './lettersIndexedDbStorage'

type LetterStore = {
    letters: Letter[]
    addLetter: (letter: Letter) => Promise<void>
    removeLetter: (id: string) => Promise<void>
    updateLetter: (id: string, updatedLetter: Partial<Letter>) => Promise<void>
    initializeStore: () => Promise<void>
}

export const useLettersStore = create<LetterStore>((set, get) => ({
    letters: [],

    initializeStore: async () => {
        try {
            const storedLetters = await lettersStorage.getLetters()
            set({ letters: storedLetters })
        } catch (error) {
            console.error('Error initializing letters store:', error)
        }
    },

    addLetter: async (letter) => {
        try {
            const newLetters = [...get().letters, letter]
            await lettersStorage.addLetter(letter)
            set({ letters: newLetters })
        } catch (error) {
            console.error('Error initializing letters store:', error)
        }
    },

    removeLetter: async (id) => {
        try {
            const newLetters = get().letters.filter(
                (letter) => letter.id !== id
            )
            await lettersStorage.removeLetterById(id)
            set({ letters: newLetters })
        } catch (error) {
            console.error('Error removing letter:', error)
        }
    },

    updateLetter: async (id, updatedLetter) => {
        try {
            const newLetters = get().letters.map((letter) =>
                letter.id === id ? { ...letter, ...updatedLetter } : letter
            )
            await lettersStorage.updateLetter(id, updatedLetter)
            set({ letters: newLetters })
        } catch (error) {
            console.error('Error updating letter:', error)
        }
    },
}))
