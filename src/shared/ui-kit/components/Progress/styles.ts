import { css } from 'styled-system/css'
import { hstack } from 'styled-system/patterns'

export const containerStyles = hstack({
    gap: '4px',
    justifyContent: 'center',
})

export const baseStyles = css({
    transition: 'all 0.2s ease-in-out',
})

export const dotStyles = css({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'black',
    opacity: 0.24,
    '&[data-active="true"]': {
        opacity: 1,
    },
})

export const rectStyles = css({
    width: '32px',
    height: '8px',
    borderRadius: 'sm',
    backgroundColor: 'black',
    opacity: 0.24,
    '&[data-active="true"]': {
        opacity: 1,
    },
})
