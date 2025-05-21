import { Heading } from '@/shared/ui-kit/components'
import React from 'react'
import { css } from 'styled-system/css'

type LetterFormTitleProps = {
    jobTitle?: string
    company?: string
}

export const LetterFormTitle: React.FC<LetterFormTitleProps> = ({
    jobTitle,
    company,
}) => {
    if (!jobTitle && !company) {
        return <Heading variant="secondary">New Application</Heading>
    }

    const title = [jobTitle, company].filter(Boolean).join(', ')

    return (
        <Heading
            className={css({
                textTransform: 'capitalize',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                maxWidth: '100%',
                display: 'block',
            })}
        >
            {title}
        </Heading>
    )
}
