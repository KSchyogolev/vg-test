import clsx from 'clsx'
import React, { type MouseEventHandler } from 'react'
import { contentStyles, footerStyles, getBaseStyles } from './styles'

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
    bg?: string
    footer?: React.ReactNode | string
    clickable?: boolean
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const Card: React.FC<CardProps> = ({
    children,
    bg = 'white',
    className,
    footer,
    onClick,
    ...props
}) => {
    const isClickable = !!onClick

    return (
        <div
            onClick={onClick}
            className={clsx(getBaseStyles(bg, isClickable), className)}
            {...props}
        >
            <div className={contentStyles}>{children}</div>
            {footer && <div className={footerStyles}>{footer}</div>}
        </div>
    )
}

Card.displayName = 'Card'
