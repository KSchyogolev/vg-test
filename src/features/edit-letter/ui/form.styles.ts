import { css } from 'styled-system/css'

export const formStyles = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '100%',
    padding: { base: '0 8px', sm: '0' },
    overflow: 'hidden',
})

export const formFieldStyles = css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    width: '100%',
    '& > *': {
        flex: { base: '1 1 100%', sm: '1 1 280px' },
    },
})
