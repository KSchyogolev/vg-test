import { ROUTES } from '@/app/routes'
import { useLettersStore } from '@/entities/letter'
import { EditLetterForm } from '@/features/edit-letter'
import { LetterCard } from '@/widgets/letter-card'
import { Loader } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Heading } from 'ui-kit/components'
import {
    contentStyles,
    loaderContainerStyles,
    loaderIconStyles,
    pageStyles,
} from './styles'

const LetterEditor: React.FC = () => {
    const { letterId } = useParams<{ letterId: string }>()
    const { letters, isLoading } = useLettersStore()
    const navigate = useNavigate()

    // Abort control to avoid side effects (TODO: move to shared folder)
    const isMountedRef = useRef(true)
    useEffect(() => {
        isMountedRef.current = true
        return () => {
            isMountedRef.current = false
        }
    }, [])

    const letter = letterId
        ? letters.find((letter) => letter.id === letterId)
        : undefined

    useEffect(() => {
        if (!isLoading && letterId && !letter) {
            navigate(ROUTES.home)
        }
    }, [letterId, letter, navigate, isLoading])

    const handleLetterSuccess = (newLetterId?: string) => {
        if (newLetterId && isMountedRef.current) {
            navigate(ROUTES.editLetter(newLetterId), { replace: true })
        }
    }

    if (isLoading && letterId) {
        return (
            <div className={pageStyles}>
                <div className={loaderContainerStyles}>
                    <Loader className={loaderIconStyles} />
                    <Heading size="md">Loading letter...</Heading>
                </div>
            </div>
        )
    }

    return (
        <div className={pageStyles}>
            <div className={contentStyles}>
                <EditLetterForm
                    letterId={letterId}
                    onSuccess={handleLetterSuccess}
                />

                <LetterCard
                    letterId={letter?.id}
                    text={letter?.text}
                    placeholder="Your personalized job application will appear here..."
                />
            </div>
        </div>
    )
}

export default LetterEditor
