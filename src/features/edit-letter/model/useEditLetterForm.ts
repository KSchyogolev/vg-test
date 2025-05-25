import type { LetterConfig } from '@/entities/letter'
import { useLettersStore, useProcessingStore } from '@/entities/letter'
import { generateText } from '@/shared/api/openai'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { createLetterPrompt } from '../lib/prompts'
import { letterFormSchema } from '../lib/validation'
type FormData = LetterConfig

type UseEditLetterFormProps = {
    letterId?: string
    onSuccess?: (letterId?: string) => void
}

export const useEditLetterForm = ({
    letterId,
    onSuccess,
}: UseEditLetterFormProps) => {
    const { letters, addLetter, updateLetter } = useLettersStore()
    const { setProcessingLetterId, processingLetterId } = useProcessingStore()

    const letter = letterId
        ? letters.find((letter) => letter.id === letterId)
        : undefined

    const initialData = letter?.config

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
        trigger,
    } = useForm<FormData>({
        defaultValues: initialData || {
            jobTitle: '',
            company: '',
            skills: '',
            details: '',
        },
        mode: 'onChange',
        resolver: zodResolver(letterFormSchema),
    })

    useEffect(() => {
        if (!initialData) {
            trigger()
        }
    }, [trigger, initialData])

    const onSubmit = async (data: FormData) => {
        setProcessingLetterId(letterId)
        try {
            // TODO: move prompt to backend to avoid sharing additional value of product
            const prompt = createLetterPrompt(data)
            const generatedText = await generateText(prompt)

            // TODO: discuss with product team and add optimistic saving letter before text generation to display loader on main page
            if (letterId) {
                await updateLetter(letterId, {
                    config: data,
                    text: generatedText,
                })
                onSuccess?.()
            } else {
                const newLetterId = uuidv4()
                await addLetter({
                    id: newLetterId,
                    config: data,
                    text: generatedText,
                })
                // Adding a flag to tell if we're creating or updating might better for clarity and future features, but here it's overkill.
                onSuccess?.(newLetterId)
            }
        } catch (error) {
            console.error('Error generating letter:', error)
            // TODO: make a toast in ui-kit with design team
            alert('Error generating letter: ' + error)
        } finally {
            setProcessingLetterId(null)
        }
    }

    const isFormValid = Object.keys(errors).length === 0

    return {
        register,
        handleSubmit,
        isFormValid,
        isSubmitting: isSubmitting || processingLetterId === letterId,
        onSubmit,
        errors,
        watch,
    }
}
