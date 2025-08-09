import { GoogleGenerativeAI } from '@google/generative-ai'

/**
 * Service for interacting with Google's Gemini AI API
 */
export class GeminiService {
  private genAI: GoogleGenerativeAI
  private model: any
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.genAI = new GoogleGenerativeAI(apiKey)
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })
  }

  /**
   * Generate text based on a prompt
   */
  async generateText(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt)
      const response = await result.response
      return response.text()
    } catch (error) {
      console.error('Error generating text:', error)
      throw new Error('Failed to generate text. Please try again.')
    }
  }

  /**
   * Improve or modify existing text
   */
  async improveText(text: string, instruction: string): Promise<string> {
    const prompt = `Please ${instruction} the following text while maintaining its markdown formatting:

${text}

Return only the improved text without any additional explanation.`

    return this.generateText(prompt)
  }

  /**
   * Generate text based on a topic or title
   */
  async generateFromTopic(topic: string, length: 'short' | 'medium' | 'long' = 'medium'): Promise<string> {
    const lengthInstructions = {
      short: 'Write a brief paragraph (2-3 sentences)',
      medium: 'Write a comprehensive section (3-5 paragraphs)',
      long: 'Write a detailed article (6+ paragraphs with subheadings)'
    }

    const prompt = `${lengthInstructions[length]} about "${topic}". Use proper markdown formatting including headers, lists, and emphasis where appropriate. Make it informative and well-structured.`

    return this.generateText(prompt)
  }

  /**
   * Continue writing from existing text
   */
  async continueWriting(existingText: string, direction: 'forward' | 'expand' = 'forward'): Promise<string> {
    const instruction = direction === 'forward' 
      ? 'Continue writing from where this text ends, maintaining the same style and tone:'
      : 'Expand on the ideas in this text with more detail and examples:'

    const prompt = `${instruction}

${existingText}

Return only the new content to be added, using proper markdown formatting.`

    return this.generateText(prompt)
  }

  /**
   * Summarize text
   */
  async summarizeText(text: string, length: 'brief' | 'detailed' = 'brief'): Promise<string> {
    const instruction = length === 'brief' 
      ? 'Create a brief summary (1-2 sentences)'
      : 'Create a detailed summary with key points'

    const prompt = `${instruction} of the following text:

${text}

Use markdown formatting for the summary.`

    return this.generateText(prompt)
  }

  /**
   * Rewrite text with a specific tone or style
   */
  async rewriteText(text: string, tone: string): Promise<string> {
    const prompt = `Rewrite the following text in a ${tone} tone while maintaining its core meaning and markdown formatting:

${text}

Return only the rewritten text.`

    return this.generateText(prompt)
  }

  /**
   * Check if the API key is valid
   */
  async validateApiKey(): Promise<boolean> {
    try {
      await this.generateText('Hello')
      return true
    } catch (error) {
      return false
    }
  }
}

// Singleton instance for the service
let geminiServiceInstance: GeminiService | null = null

export const getGeminiService = (apiKey?: string): GeminiService => {
  if (!geminiServiceInstance && apiKey) {
    geminiServiceInstance = new GeminiService(apiKey)
  }
  if (!geminiServiceInstance) {
    throw new Error('Gemini service not initialized. Please provide an API key.')
  }
  return geminiServiceInstance
}

export const initializeGeminiService = (apiKey: string): void => {
  geminiServiceInstance = new GeminiService(apiKey)
}
