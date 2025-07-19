import { NextRequest, NextResponse } from 'next/server'

interface VerificationRequest {
  data: string
  type: string
  apiKey: string
}

interface VerificationResult {
  type: string
  status: 'valid' | 'invalid' | 'error'
  message: string
  details?: any
}

export async function POST(request: NextRequest) {
  try {
    const body: VerificationRequest = await request.json()
    const { data, type, apiKey } = body

    if (!data || !type || !apiKey) {
      return NextResponse.json(
        { error: 'Missing required fields: data, type, or apiKey' },
        { status: 400 }
      )
    }

    // Create the prompt for Gemini based on verification type
    const prompt = createVerificationPrompt(data, type)
    
    // Call Gemini API
    const geminiResponse = await callGeminiAPI(prompt, apiKey)
    
    // Parse and format the response
    const results = parseGeminiResponse(geminiResponse, type)

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Verification API error:', error)
    return NextResponse.json(
      { 
        results: [{
          type: 'unknown',
          status: 'error',
          message: 'Failed to process verification request'
        }]
      },
      { status: 500 }
    )
  }
}

function createVerificationPrompt(data: string, type: string): string {
  const basePrompt = `You are a data verification expert. Analyze the following data and provide a JSON response with verification results.

Data to verify: "${data}"
Verification type: ${type}

Please provide a JSON response in this exact format:
{
  "status": "valid|invalid|error",
  "message": "Detailed explanation of the verification result",
  "details": {
    "confidence": 0.95,
    "issues": ["list of any issues found"],
    "suggestions": ["list of suggestions for improvement"]
  }
}

Verification rules for ${type}:`

  const typeSpecificRules = {
    email: `
- Check if it follows standard email format (user@domain.com)
- Validate domain structure
- Check for common email patterns
- Identify potential issues like missing @ symbol, invalid characters, etc.`,
    
    phone: `
- Check if it follows phone number format
- Validate country code if present
- Check for proper length and structure
- Identify common phone number patterns`,
    
    'credit-card': `
- Check if it follows credit card number patterns
- Validate Luhn algorithm (checksum)
- Identify card type if possible
- Check for proper length and format`,
    
    ssn: `
- Check if it follows SSN format (XXX-XX-XXXX)
- Validate it's not a test number (000, 666, 900-999)
- Check for proper length and structure`,
    
    address: `
- Check if it contains street, city, state, zip components
- Validate address structure
- Check for proper formatting
- Identify missing or invalid components`,
    
    custom: `
- Analyze the data for general validity
- Check for common data quality issues
- Provide suggestions for improvement
- Identify any obvious errors or inconsistencies`
  }

  return basePrompt + (typeSpecificRules[type as keyof typeof typeSpecificRules] || typeSpecificRules.custom)
}

async function callGeminiAPI(prompt: string, apiKey: string): Promise<string> {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    })

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    return data.candidates?.[0]?.content?.parts?.[0]?.text || ''
  } catch (error) {
    console.error('Gemini API call failed:', error)
    throw new Error('Failed to call Gemini API')
  }
}

function parseGeminiResponse(response: string, type: string): VerificationResult[] {
  try {
    // Try to extract JSON from the response
    const jsonMatch = response.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return [{
        type,
        status: 'error',
        message: 'Unable to parse AI response'
      }]
    }

    const parsed = JSON.parse(jsonMatch[0])
    
    return [{
      type,
      status: parsed.status || 'error',
      message: parsed.message || 'Verification completed',
      details: parsed.details || {}
    }]
  } catch (error) {
    console.error('Failed to parse Gemini response:', error)
    return [{
      type,
      status: 'error',
      message: 'Failed to parse verification results'
    }]
  }
} 