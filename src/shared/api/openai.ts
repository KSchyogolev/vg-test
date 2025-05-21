import axios from 'axios'
import { apiClient } from './config'

type OpenAIChatResponse = {
    choices: Array<{
        message: {
            content: string
        }
        index: number
    }>
}

export const generateText = async (prompt: string) => {
    try {
        const response = await apiClient.post<OpenAIChatResponse>('/openai', {
            prompt,
        })

        return response.data.choices[0]?.message.content || ''
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(
                'OpenAI API error:',
                error.response?.data || error.message
            )
        } else {
            console.error('OpenAI API error:', error)
        }
        throw error
    }
}
