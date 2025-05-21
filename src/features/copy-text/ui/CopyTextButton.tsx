import { CheckIcon, CopyIcon } from 'lucide-react'
import { useState } from 'react'
import { css } from 'styled-system/css'
import { Button } from 'ui-kit/components'

interface CopyTextButtonProps {
    className?: string
    text: string
    onCopy?: () => void
}

export const CopyTextButton = ({
    className = '',
    text,
    onCopy,
}: CopyTextButtonProps) => {
    const [isCopied, setIsCopied] = useState(false)

    const handleClick = async (e: React.MouseEvent) => {
        e.stopPropagation()

        if (isCopied) {
            return
        }

        try {
            await navigator.clipboard.writeText(text)
            setIsCopied(true)

            if (onCopy) {
                onCopy()
            }

            setTimeout(() => {
                setIsCopied(false)
            }, 1000)
        } catch (error) {
            console.error('Failed to copy text: ', error)
        }
    }

    return (
        <Button
            className={className}
            onClick={handleClick}
            variant="text"
            size="md"
            iconRight={
                isCopied ? (
                    <CheckIcon className={css({ color: 'green.500' })} />
                ) : (
                    <CopyIcon />
                )
            }
        >
            {isCopied ? 'Copied' : 'Copy to clipboard'}
        </Button>
    )
}
