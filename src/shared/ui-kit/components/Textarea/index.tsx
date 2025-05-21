import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { css } from 'styled-system/css'
import { getBaseInputStyles } from '../Input/styles'
import type { BaseInputProps } from '../Input/types'
import { baseStyles } from './styles'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    BaseInputProps

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, ...props }, ref) => {
        const styles = clsx(getBaseInputStyles(error), baseStyles, className)

        return (
            <div
                className={css({
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                })}
            >
                <textarea ref={ref} className={styles} {...props} />
            </div>
        )
    }
)

Textarea.displayName = 'Textarea'
