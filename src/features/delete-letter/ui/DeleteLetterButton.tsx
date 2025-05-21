import { useLettersStore } from '@/entities/letter'
import { TrashIcon } from 'lucide-react'
import { useState } from 'react'
import { css } from 'styled-system/css'
import { Button } from 'ui-kit/components'

interface DeleteLetterButtonProps {
    className?: string
    letterId?: string
}

export const DeleteLetterButton = ({
    className = '',
    letterId = '',
}: DeleteLetterButtonProps) => {
    const [showConfirm, setShowConfirm] = useState(false)

    const { removeLetter } = useLettersStore()

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()

        if (!showConfirm) {
            setShowConfirm(true)
            return
        }

        removeLetter(letterId)

        setShowConfirm(false)
    }

    const handleCancel = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    return (
        <Button
            className={className}
            onClick={handleClick}
            variant="text"
            size="md"
            iconLeft={<TrashIcon />}
        >
            {showConfirm ? (
                <div className={confirmContainerStyles}>
                    <div
                        className={css({
                            _hover: {
                                color: 'gray.600',
                            },
                        })}
                    >
                        Sure?
                    </div>
                    <div
                        className={css({
                            fontSize: '12px',
                            textDecoration: 'underline',
                            _hover: { color: 'gray.600' },
                        })}
                        onClick={handleCancel}
                    >
                        Cancel
                    </div>
                </div>
            ) : (
                <span className={css({ minWidth: '85px', textAlign: 'left' })}>
                    Delete
                </span>
            )}
        </Button>
    )
}

const confirmContainerStyles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '4px',
})
