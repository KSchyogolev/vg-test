import { LettersBanner } from '@/widgets/motivation-banner'
import { NavBar } from '@/widgets/navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { css } from 'styled-system/css'

export const MainLayout: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <footer
                className={css({
                    padding: '32px',
                })}
            >
                <LettersBanner />
            </footer>
        </div>
    )
}
