import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { baseStyles, containerStyles, dotStyles, rectStyles } from './styles'

type ProgressProps = HTMLAttributes<HTMLDivElement> & {
    variant?: 'dot' | 'rect'
    current: number
    total: number
}

export const Progress: FC<ProgressProps> = ({
    variant = 'rect',
    current,
    total,
    className,
    ...props
}) => {
    const items = Array.from({ length: total }, (_, index) => {
        const isActive = index < current
        return (
            <div
                key={index}
                data-active={isActive}
                className={clsx(
                    baseStyles,
                    variant === 'dot' ? dotStyles : rectStyles
                )}
            />
        )
    })

    return (
        <div className={clsx(containerStyles, className)} {...props}>
            {items}
        </div>
    )
}

Progress.displayName = 'Progress'
