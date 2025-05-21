import clsx from 'clsx'
import React from 'react'
import { css } from 'styled-system/css'
import { Text } from '../Typography'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = ({
    className,
    children,
    ...props
}) => {
    const labelStyles = css({
        marginBottom: '6px',
        display: 'block',
    })

    return (
        <label className={clsx(labelStyles, className)} {...props}>
            <Text as="span" size="sm" variant="label">
                {children}
            </Text>
        </label>
    )
}
