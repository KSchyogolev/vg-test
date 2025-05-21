import { z } from 'zod'

export const MAX_DETAILS_LENGTH = 1200

// zod is OVERHEAD in this case, just for the demonstration
// TODO: discuss with the product team extendend validation with messages
export const letterFormSchema = z.object({
    jobTitle: z.string().min(1),
    company: z.string().min(1),
    skills: z.string().min(1),
    details: z.string().min(1).max(MAX_DETAILS_LENGTH),
})

export type LetterFormSchema = z.infer<typeof letterFormSchema>
