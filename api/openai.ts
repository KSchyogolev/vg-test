import type { VercelRequest, VercelResponse } from '@vercel/node'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''

// TODO: make a node server instead of serverless function
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { prompt } = req.body

    if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt' })
    }

    try {
        const openaiRes = await fetch(
            'https://api.openai.com/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: prompt }],
                }),
            }
        )

        const data = await openaiRes.json()

        res.status(openaiRes.status).json(data)
    } catch (err: unknown) {
        res.status(500).json({
            error: 'Something went wrong',
            details: err instanceof Error ? err.message : 'Unknown error',
        })
    }
}
