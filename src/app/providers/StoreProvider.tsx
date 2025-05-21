import { useLettersStore } from '@/entities/letter'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const { initializeStore } = useLettersStore()

    useEffect(() => {
        initializeStore()
    }, [initializeStore])

    return <>{children}</>
}
