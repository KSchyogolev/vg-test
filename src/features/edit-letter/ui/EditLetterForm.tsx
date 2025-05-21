import { Button, Field, Input, Textarea } from '@/shared/ui-kit/components'
import { RepeatIcon } from 'lucide-react'
import React from 'react'
import { css } from 'styled-system/css'
import { MAX_DETAILS_LENGTH } from '../lib/validation'
import { useEditLetterForm } from '../model/useEditLetterForm'
import { LetterFormTitle } from './LetterFormTitle'
import { formFieldStyles, formStyles } from './form.styles'

type EditLetterFormProps = {
    letterId?: string
    onSuccess?: (letterId?: string) => void
}

export const EditLetterForm: React.FC<EditLetterFormProps> = ({
    letterId,
    onSuccess,
}) => {
    const {
        register,
        handleSubmit,
        isSubmitting,
        onSubmit,
        watch,
        isFormValid,
        errors,
    } = useEditLetterForm({
        letterId,
        onSuccess,
    })

    const [jobTitle, company, details] = watch([
        'jobTitle',
        'company',
        'details',
    ])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles}>
            <LetterFormTitle
                jobTitle={jobTitle?.trim()}
                company={company?.trim()}
            />
            <div className={formFieldStyles}>
                <Field label="Job title">
                    <Input
                        maxLength={40} // TODO: discuss with product and make by validation
                        id="jobTitle"
                        placeholder="Product manager"
                        {...register('jobTitle')}
                    />
                </Field>

                <Field label="Company">
                    <Input
                        maxLength={40} // TODO: discuss with product and make by validation
                        id="company"
                        placeholder="Apple"
                        {...register('company')}
                    />
                </Field>
            </div>

            <Field label="I am good at...">
                <Input
                    maxLength={100} // TODO: discuss with product and make by validation
                    id="skills"
                    placeholder="HTML, CSS and doing things in time"
                    {...register('skills')}
                />
            </Field>

            <Field
                label="Additional details"
                error={errors.details?.type === 'too_big'}
                hint={`${details?.length || 0} / ${MAX_DETAILS_LENGTH}`}
            >
                <Textarea
                    rows={9}
                    id="details"
                    {...register('details')}
                    placeholder="Describe why you are a great fit or paste your bio"
                />
            </Field>

            {letterId ? (
                <Button
                    type="submit"
                    variant="outlined"
                    size="lg"
                    disabled={!isFormValid}
                    loading={isSubmitting}
                    iconLeft={<RepeatIcon />}
                    className={css({
                        width: { base: '100%', md: 'auto' },
                    })}
                >
                    Try Again
                </Button>
            ) : (
                <Button
                    loading={isSubmitting}
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={!isFormValid}
                    className={css({
                        width: { base: '100%', md: 'auto' },
                    })}
                >
                    Generate Now
                </Button>
            )}
        </form>
    )
}
