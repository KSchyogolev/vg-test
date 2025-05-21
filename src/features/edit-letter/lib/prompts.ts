import type { LetterConfig } from '@/entities/letter'

export const createLetterPrompt = (data: LetterConfig): string => {
    return `
    Write a professional cover letter for the position of "${data.jobTitle}" at ${data.company}.
    My key skills are: ${data.skills}.
    Additional context: ${data.details}

    Max length is 1200 characters. Use best practices of writing a cover letter like a experienced Human Resources Manager. Without any salutations, signatures or other text.
    `
}
