import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { css } from 'styled-system/css'
import { getBaseInputStyles } from './styles'
import type { BaseInputProps } from './types'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
    BaseInputProps

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        const styles = clsx(getBaseInputStyles(error), className)

        return (
            <div className={css({ width: '100%' })}>
                <input ref={ref} className={styles} {...props} />
            </div>
        )
    }
)

Input.displayName = 'Input'
