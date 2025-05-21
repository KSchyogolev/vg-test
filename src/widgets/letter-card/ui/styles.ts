import { css } from 'styled-system/css'

export const letterCardStyles = {
    card: (short: boolean) =>
        css({
            height: '100%',
            width: '100%',
            ...(short
                ? {
                      maxHeight: '240px',
                      minHeight: '240px',
                      overflow: 'hidden',
                  }
                : {
                      minHeight: { base: '400px', sm: '500px', md: '600px' },
                  }),
        }),

    footer: (short: boolean) =>
        css({
            display: 'flex',
            justifyContent: 'space-between',
            flex: 1,
            position: 'relative',
            gap: { base: '8px', md: '16px' },
            flexWrap: { base: 'wrap', sm: 'nowrap' },
            ...(!short && {
                justifyContent: 'flex-end',
            }),
        }),

    loaderContainer: css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }),

    loader: css({
        width: { base: '60px', md: '80px' },
        height: { base: '60px', md: '80px' },
        animation: 'pulseBounce 2s ease-in-out infinite',
    }),

    text: (short: boolean) =>
        css({
            overflow: 'hidden',
            marginBottom: '-8px',
            whiteSpace: 'pre-wrap',
            ...(short && {
                lineClamp: '6',
                maskImage:
                    'linear-gradient(to bottom, black 60%, transparent 100%)',
            }),
        }),
}
