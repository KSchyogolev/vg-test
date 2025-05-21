import { HomeIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from 'styled-system/css'
import { Button, Heading, Text } from 'ui-kit/components'

const NotFound: React.FC = () => {
    const navigate = useNavigate()

    const containerStyles = css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        height: '100vh',
    })

    return (
        <div className={containerStyles}>
            <Heading size="xl" as="h1">
                404
            </Heading>
            <Text size="md" className={css({ marginBottom: '16px' })}>
                Page not found
            </Text>
            <Button
                variant="outlined"
                onClick={() => navigate('/')}
                iconLeft={<HomeIcon />}
            >
                Back to home
            </Button>
        </div>
    )
}

export default NotFound
