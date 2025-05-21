import { css } from 'styled-system/css'

export const containerStyles = css({
    padding: '0 32px',
})

export const headerStyles = css({
    display: 'flex',
    flexDirection: { base: 'column', sm: 'row' },
    gap: { base: '16px', sm: '0' },
    justifyContent: 'space-between',
    alignItems: { base: 'stretch', sm: 'center' },
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--colors-gray-50)',
})

export const gridStyles = css({
    display: 'grid',
    gridTemplateColumns: {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
    },
    gap: {
        base: '16px',
    },
})
