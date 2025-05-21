import { ROUTES } from '@/app/routes'
import { useLettersStore } from '@/entities/letter'
import { LETTER_MARKETING_COUNT } from '@/entities/letter/lib/config'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from 'styled-system/css'
import { Button, Card, Heading, Progress, Text } from 'ui-kit/components'

export const LettersBanner: React.FC = () => {
    const letters = useLettersStore((state) => state.letters)
    const navigate = useNavigate()

    const handleCreateLetter = () => {
        navigate(ROUTES.newLetter)
    }

    // TODO: move to additional store all marketing flags
    if (letters.length >= LETTER_MARKETING_COUNT) return null

    return (
        <Card
            bg="primary.100"
            className={css({ alignItems: 'center', textAlign: 'center' })}
        >
            <div className={css({ margin: '54px 0' })}>
                <div
                    className={css({
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        marginBottom: '32px',
                        alignItems: 'center',
                    })}
                >
                    <Heading>Hit your goal</Heading>
                    <Text
                        className={css({ maxWidth: '480px' })}
                        variant="secondary"
                    >
                        Generate and send out couple more job applications today
                        to get hired faster
                    </Text>
                    <Button
                        onClick={handleCreateLetter}
                        size="lg"
                        iconLeft={<PlusIcon />}
                    >
                        Create New
                    </Button>
                </div>
                <Progress
                    current={letters.length}
                    total={LETTER_MARKETING_COUNT}
                    className={css({ marginBottom: '8px' })}
                />
                <Text variant="secondary">
                    {letters.length} out of {LETTER_MARKETING_COUNT}
                </Text>
            </div>
        </Card>
    )
}
