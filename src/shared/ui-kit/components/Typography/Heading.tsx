import clsx from 'clsx'
import React from 'react'
import { headingStyles, sizeStyles, variantStyles } from './styles'
import type { TypographySize, TypographyVariant } from './types'

export type HeadingProps = {
    children: React.ReactNode
    as?: React.ElementType
    size?: TypographySize
    variant?: TypographyVariant
    className?: string
}

export const Heading: React.FC<HeadingProps> = ({
    as: Component = 'h2',
    size = 'lg',
    variant = 'primary',
    className = '',
    children,
}) => {
    const styles = clsx(
        variantStyles[variant],
        sizeStyles[size],
        headingStyles,
        className
    )

    return <Component className={styles}>{children}</Component>
}
