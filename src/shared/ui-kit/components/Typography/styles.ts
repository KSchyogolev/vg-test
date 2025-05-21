import { css } from 'styled-system/css'

export const sizeStyles = {
    xl: css({
        fontWeight: '600',
        fontSize: '48px',
        lineHeight: '60px',
    }),
    lg: css({
        fontWeight: '600',
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '-2%',
    }),
    md: css({
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '28px',
        letterSpacing: '0%',
    }),
    sm: css({
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0%',
    }),
}

export const variantStyles = {
    secondary: css({
        color: 'gray.500',
    }),
    primary: css({
        color: 'black',
    }),
    label: css({
        color: 'gray.900', // looks like a bug in figma (TODO: discuss with design and fix to 'black')
    }),
    error: css({
        color: 'red.500',
    }),
}

export const headingStyles = css({
    fontFamily: 'Fixel Display',
})
