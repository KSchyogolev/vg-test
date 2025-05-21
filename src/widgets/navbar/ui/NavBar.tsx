import { ROUTES } from '@/app/routes'
import { LETTER_MARKETING_COUNT, useLettersStore } from '@/entities/letter'
import CustomCheckIcon from '@/shared/assets/CustomCheckIcon.svg'
import Logo from '@/shared/assets/Logo.svg'
import { HomeIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from 'styled-system/css'
import { Button, Progress, Text } from 'ui-kit/components'
import {
    containerStyles,
    menuStyles,
    navbarStyles,
    progressStyles,
} from './styles'

export const NavBar: React.FC = () => {
    const navigate = useNavigate()

    const { letters } = useLettersStore()

    const isProgressVisible = letters.length < LETTER_MARKETING_COUNT

    const visibleCount = isProgressVisible
        ? letters.length
        : LETTER_MARKETING_COUNT
    const label = letters.length === 1 ? 'application' : 'applications'

    return (
        <nav className={navbarStyles}>
            <div className={containerStyles}>
                <img
                    src={Logo}
                    alt="Logo"
                    width={180}
                    height={44}
                    className={css({
                        width: '180px',
                        height: 'auto',
                    })}
                />
                <div className={menuStyles}>
                    <div className={progressStyles}>
                        <Text variant="secondary">{`${visibleCount}/${LETTER_MARKETING_COUNT} ${label} generated`}</Text>
                        {isProgressVisible ? (
                            <Progress
                                variant="dot"
                                current={letters.length}
                                total={LETTER_MARKETING_COUNT}
                            />
                        ) : (
                            <img src={CustomCheckIcon} alt="Done" />
                        )}
                    </div>
                    <Button
                        onClick={() => {
                            navigate(ROUTES.home)
                        }}
                        variant="outlined"
                        iconLeft={<HomeIcon />}
                        size="sm"
                    />
                </div>
            </div>
        </nav>
    )
}
