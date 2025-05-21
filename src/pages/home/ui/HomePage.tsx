import { ROUTES } from '@/app/routes'
import { useLettersStore } from '@/entities/letter'
import { LetterCard } from '@/widgets/letter-card'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Heading } from 'ui-kit/components'
import { containerStyles, gridStyles, headerStyles } from './styles'

export const HomePage: React.FC = () => {
    const { letters } = useLettersStore()
    const navigate = useNavigate()

    const handleCreateLetter = () => {
        navigate(ROUTES.newLetter)
    }

    const handleLetterClick = (letterId: string) => {
        navigate(ROUTES.editLetter(letterId))
    }

    return (
        <div className={containerStyles}>
            <div className={headerStyles}>
                <Heading as="h1" size="xl">
                    Applications
                </Heading>
                <Button onClick={handleCreateLetter} iconLeft={<PlusIcon />}>
                    Create New
                </Button>
            </div>
            <div className={gridStyles}>
                {letters.map((letter) => (
                    <LetterCard
                        onClick={() => handleLetterClick(letter.id)}
                        key={letter.id}
                        short
                        letterId={letter.id}
                        text={letter.text}
                    />
                ))}
            </div>
        </div>
    )
}
