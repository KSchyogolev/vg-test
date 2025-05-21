import clsx from 'clsx'
import React from 'react'
import { Label } from '../Label'
import { Text } from '../Typography'
import { baseStyles, hintStyles } from './styles'

import type { InputProps } from '../Input'

export type FieldProps = {
    label?: string
    error?: string | boolean
    hint?: string
    required?: boolean
    children: React.ReactNode
    className?: string
}

export const Field: React.FC<FieldProps> = ({
    label,
    hint,
    error,
    className,
    children,
}) => {
    const childrenWithError = React.Children.map(children, (child) => {
        if (React.isValidElement<InputProps>(child)) {
            return React.cloneElement(child, {
                error: Boolean(error),
            })
        }
        return child
    })

    return (
        <div className={clsx(baseStyles, className)}>
            {label && <Label>{label}</Label>}
            {childrenWithError}
            {error && typeof error === 'string' ? (
                <Text as="div" size="sm" variant="error" className={hintStyles}>
                    {error}
                </Text>
            ) : hint ? (
                <Text
                    as="div"
                    size="sm"
                    variant={error ? 'error' : 'secondary'}
                    className={hintStyles}
                >
                    {hint}
                </Text>
            ) : null}
        </div>
    )
}

Field.displayName = 'Field'
