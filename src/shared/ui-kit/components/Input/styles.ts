import { css } from 'styled-system/css'

export const getBaseInputStyles = (error?: boolean) =>
    css({
        width: '100%',
        padding: '8px 12px',
        borderRadius: 'sm',
        fontSize: '1rem',
        outline: 'none',
        transition: 'box-shadow 0.2s',
        gap: '8px',
        backgroundColor: 'white',
        boxShadow: 'inset 0 0 0 1px var(--colors-gray-300)', // Inner alignment border for pixel perfect with figma (TODO: discuss with design)
        _focus: {
            boxShadow:
                'inset 0 0 0 1px var(--colors-primary-300), 0px 0px 0px 4px var(--colors-primary-50), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        },
        ...(error && {
            boxShadow: 'inset 0 0 0 1px var(--colors-error-300)',
            _focus: {
                boxShadow:
                    'inset 0 0 0 1px var(--colors-error-500), 0px 0px 0px 4px var(--colors-error-50), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
            },
        }),
    })
