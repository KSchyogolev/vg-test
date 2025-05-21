import { css } from 'styled-system/css'

export const navbarStyles = css({
    width: '100%',
    backgroundColor: 'white',
})

export const containerStyles = css({
    margin: { base: '16px 0', md: '32px 0' },
    padding: '0 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: { base: 'column', md: 'row' },
    gap: { base: '16px', md: '0' },
})

export const menuStyles = css({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flexDirection: { base: 'column', md: 'row' },
})

export const progressStyles = css({
    display: 'flex',
    alignItems: 'center',
    gap: { base: '8px', md: '16px' },
    flexDirection: { base: 'column', md: 'row' },
    textAlign: { base: 'center', md: 'left' },
})
