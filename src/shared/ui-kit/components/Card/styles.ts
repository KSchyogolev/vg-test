import { css } from 'styled-system/css'

export const getBaseStyles = (bg: string, isClickable: boolean) =>
    css({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'md',
        width: '100%',
        padding: { base: '16px', sm: '20px', md: '24px' },
        background: bg,
        ...(isClickable && {
            cursor: 'pointer',
            '&:hover': {
                background: 'gray.200',
            },
        }),
    })

export const contentStyles = css({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
})

export const footerStyles = css({
    marginTop: 'auto',
    paddingTop: { base: '6px', md: '8px' },
    display: 'flex',
})
