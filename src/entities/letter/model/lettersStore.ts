import { create } from 'zustand'
import type { Letter } from '../lib/types'
import { lettersIndexedDbStorage as lettersStorage } from './lettersIndexedDbStorage'

type LetterStore = {
    letters: Letter[]
    isLoading: boolean
    addLetter: (letter: Letter) => Promise<void>
    removeLetter: (id: string) => Promise<void>
    updateLetter: (id: string, updatedLetter: Partial<Letter>) => Promise<void>
    initializeStore: () => Promise<void>
}

export const useLettersStore = create<LetterStore>((set, get) => ({
    letters: [],
    isLoading: true,

    initializeStore: async () => {
        try {
            set({ isLoading: true })
            const storedLetters = await lettersStorage.getLetters()
            set({ letters: storedLetters, isLoading: false })
        } catch (error) {
            console.error('Error initializing letters store:', error)
            set({ isLoading: false })
        }
    },

    addLetter: async (letter) => {
        try {
            set({ isLoading: true })
            const newLetters = [...get().letters, letter]
            await lettersStorage.addLetter(letter)
            set({ letters: newLetters, isLoading: false })
        } catch (error) {
            console.error('Error initializing letters store:', error)
            set({ isLoading: false })
        }
    },

    removeLetter: async (id) => {
        try {
            set({ isLoading: true })
            const newLetters = get().letters.filter(
                (letter) => letter.id !== id
            )
            await lettersStorage.removeLetterById(id)
            set({ letters: newLetters, isLoading: false })
        } catch (error) {
            console.error('Error removing letter:', error)
            set({ isLoading: false })
        }
    },

    updateLetter: async (id, updatedLetter) => {
        try {
            set({ isLoading: true })
            const newLetters = get().letters.map((letter) =>
                letter.id === id ? { ...letter, ...updatedLetter } : letter
            )
            await lettersStorage.updateLetter(id, updatedLetter)
            set({ letters: newLetters, isLoading: false })
        } catch (error) {
            console.error('Error updating letter:', error)
            set({ isLoading: false })
        }
    },
}))
