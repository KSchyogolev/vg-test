import clsx from 'clsx'
import React from 'react'
import { sizeStyles, variantStyles } from './styles'
import type { TypographySize, TypographyVariant } from './types'

export type TextProps = {
    children: React.ReactNode
    as?: React.ElementType
    size?: TypographySize
    variant?: TypographyVariant
    className?: string
    ref?: React.Ref<HTMLParagraphElement>
}

export const Text: React.FC<TextProps> = ({
    as: Component = 'p',
    size = 'md',
    variant = 'primary',
    className = '',
    children,
    ref,
    ...props
}) => {
    const styles = clsx(variantStyles[variant], sizeStyles[size], className)

    return (
        <Component className={styles} {...props} ref={ref}>
            {children}
        </Component>
    )
}
