import { css } from 'styled-system/css'

export const pageStyles = css({
    padding: '0 32px',
})

export const contentStyles = css({
    display: 'grid',
    gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
    gap: { base: '16px', md: '32px' },
    alignItems: 'start',
})

export const loaderContainerStyles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    backgroundColor: 'gray.100',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: 'sm',
    minHeight: '610px',
    flexDirection: 'column',
})

export const loaderIconStyles = css({
    animation: 'spin 2s linear infinite',
    color: 'gray.500',
    width: '48px',
    height: '48px',
})
