import { css } from 'styled-system/css'

export const getBaseStyles = (fullWidth?: boolean, loading?: boolean) =>
    css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
        cursor: 'pointer',
        width: fullWidth ? '100%' : 'auto',
        boxSizing: 'border-box',
        position: 'relative',
        pointerEvents: loading ? 'none' : 'auto',
    })

export const sizeStyles = {
    sm: css({
        py: '10px',
        px: '10px',
        fontSize: '14px',
        borderRadius: 'sm',
        fontWeight: 400,
        gap: '8px',
    }),
    md: css({
        py: '10px',
        px: '18px',
        fontSize: '16px',
        borderRadius: 'sm',
        fontWeight: 600,
        gap: '8px',
    }),
    lg: css({
        py: '16px',
        px: '28px',
        fontSize: '18px',
        borderRadius: 'sm',
        fontWeight: 600,
        gap: '12px',
        lineHeight: '28px',
    }),
}

export const iconStyles = {
    sm: css({
        fontSize: '16px',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    md: css({
        fontSize: '16px',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    lg: css({
        fontSize: '18px',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
}

export const variantStyles = {
    primary: css({
        bg: 'primary.500',
        color: 'white',
        boxShadow: 'inset 0 0 0 1px var(--colors-primary-500)', // Inner alignment border for pixel perfect with figma (TODO: discuss with design)
        _hover: { bg: 'primary.400' },
        _active: { bg: 'primary.600' },
        _disabled: {
            boxShadow: 'inset 0 0 0 1px var(--colors-gray-300)',
            bg: 'gray.300',
            color: 'gray.600',
            _hover: { bg: 'gray.300' },
            cursor: 'not-allowed',
        },
    }),
    outlined: css({
        bg: 'white',
        color: 'gray.900',
        boxShadow: 'inset 0 0 0 1px var(--colors-gray-300)',
        _hover: { bg: 'gray.100' },
        _active: { bg: 'gray.200' },
        _disabled: {
            bg: 'gray.300',
            color: 'gray.600',
            _hover: { bg: 'gray.300' },
            cursor: 'not-allowed',
        },
    }),
    text: css({
        bg: 'transparent',
        color: 'gray.800',
        border: 'none',
        padding: '0',
        _hover: {
            color: 'gray.700',
        },
        _active: {
            color: 'gray.900',
        },
        _disabled: {
            color: 'gray.600',
            _hover: { color: 'gray.600' },
            cursor: 'not-allowed',
        },
    }),
}

export const spinnerStyles = css({
    animation: 'spin 2s linear infinite',
})
