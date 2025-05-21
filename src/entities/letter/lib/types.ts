export type LetterConfig = {
    jobTitle: string
    company: string
    skills: string
    details: string
}

export type Letter = {
    id: string
    config: LetterConfig
    text?: string
}
