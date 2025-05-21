import { useProcessingStore } from '@/entities/letter/model/processingStore'
import { CopyTextButton } from '@/features/copy-text'
import { DeleteLetterButton } from '@/features/delete-letter'
import EllipseLoader from '@/shared/assets/EllipseLoader.svg'
import clsx from 'clsx'
import React from 'react'
import { Card, Text } from 'ui-kit/components'
import { letterCardStyles } from './styles'

export type LetterCardProps = React.HTMLAttributes<HTMLDivElement> & {
    short?: boolean
    letterId?: string
    text?: string
    placeholder?: string
}

// Maybe overhead, but some models of openAi returns text with \n
const formatText = (text: string | undefined): React.ReactNode => {
    if (!text) return ''

    const lines = text.split('\n')

    return (
        <>
            {lines.map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                </React.Fragment>
            ))}
        </>
    )
}

export const LetterCard: React.FC<LetterCardProps> = ({
    short = false,
    className,
    letterId,
    text,
    placeholder,
    ...props
}) => {
    const isProcessing = useProcessingStore(
        (state) => state.processingLetterId === letterId
    )

    return (
        <Card
            bg="gray.100"
            className={clsx(letterCardStyles.card(short), className)}
            footer={
                !isProcessing && (
                    <div className={letterCardStyles.footer(short)}>
                        {short && <DeleteLetterButton letterId={letterId} />}
                        <CopyTextButton text={text ?? ''} />
                    </div>
                )
            }
            {...props}
        >
            {isProcessing ? (
                <div className={letterCardStyles.loaderContainer}>
                    <img
                        src={EllipseLoader}
                        alt="Loading..."
                        className={letterCardStyles.loader}
                    />
                </div>
            ) : (
                <Text
                    variant="secondary"
                    className={letterCardStyles.text(short)}
                >
                    {formatText(text) || placeholder}
                </Text>
            )}
        </Card>
    )
}
