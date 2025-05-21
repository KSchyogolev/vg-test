import clsx from 'clsx'
import { Loader } from 'lucide-react'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'
import {
    getBaseStyles,
    iconStyles,
    sizeStyles,
    spinnerStyles,
    variantStyles,
} from './styles'
import type { ButtonSize, ButtonVariant } from './types'
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    size?: ButtonSize
    fullWidth?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    children?: React.ReactNode
    loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    iconLeft,
    iconRight,
    children,
    className,
    loading = false,
    disabled,
    ...props
}) => {
    const styles = clsx(
        getBaseStyles(fullWidth, loading),
        sizeStyles[size],
        variantStyles[variant],
        className
    )

    const iconClassName = iconStyles[size]

    return (
        <button className={styles} disabled={disabled} {...props}>
            <>
                {iconLeft && !loading && (
                    <span className={iconClassName}>{iconLeft}</span>
                )}
                {loading ? (
                    <div className={spinnerStyles}>
                        <Loader />
                    </div>
                ) : (
                    <>{children}</>
                )}
                {iconRight && !loading && (
                    <span className={iconClassName}>{iconRight}</span>
                )}
            </>
        </button>
    )
}
