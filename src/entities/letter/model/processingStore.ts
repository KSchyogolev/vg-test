import { create } from 'zustand'

interface ProcessingStore {
    processingLetterId?: string | null
    setProcessingLetterId: (id?: string | null) => void
}

export const useProcessingStore = create<ProcessingStore>((set) => ({
    processingLetterId: null,

    setProcessingLetterId: (id) => {
        set({ processingLetterId: id })
    },
}))
