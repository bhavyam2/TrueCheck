'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface VerificationResult {
  type: string
  veracity: 'true' | 'false' | 'uncertain'
  confidence: number
  reasoning: string
  explanation: string
}

export default function DemoPage() {
  const [inputData, setInputData] = useState('')
  const [verificationType, setVerificationType] = useState('medical-claim')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<VerificationResult[]>([])
  const [apiKey, setApiKey] = useState('')

  const verificationTypes = [
    { value: 'medical-claim', label: 'Medical Claim', description: 'Verify medical claims and health information' },
    { value: 'drug-info', label: 'Drug Information', description: 'Check drug safety and dosage information' },
    { value: 'symptom-check', label: 'Symptom Analysis', description: 'Analyze symptoms and medical conditions' },
    { value: 'treatment-verify', label: 'Treatment Verification', description: 'Verify treatment recommendations' },
    { value: 'email', label: 'Email Validation', description: 'Verify email format and domain' },
    { value: 'phone', label: 'Phone Number', description: 'Validate phone number format' },
    { value: 'credit-card', label: 'Credit Card', description: 'Check credit card number validity' },
    { value: 'ssn', label: 'Social Security Number', description: 'Validate SSN format' },
    { value: 'address', label: 'Address', description: 'Verify address format and components' },
    { value: 'custom', label: 'Custom Validation', description: 'Define your own validation rules' }
  ]

  const handleVerification = async () => {
    if (!inputData.trim() || !apiKey.trim()) {
      alert('Please enter both data to verify and your Gemini API key')
      return
    }

    setIsLoading(true)
    setResults([])

    try {
      // Simulate API call to Gemini
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: inputData,
          type: verificationType,
          apiKey: apiKey
        }),
      })

      if (!response.ok) {
        throw new Error('Verification failed')
      }

      const data = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error('Verification error:', error)
      setResults([{
        type: verificationType,
        veracity: 'uncertain',
        confidence: 0.0,
        reasoning: 'Failed to verify data. Please check your API key and try again.',
        explanation: 'Unable to complete verification at this time.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusColor = (veracity: string) => {
    switch (veracity) {
      case 'true':
        return 'text-green-600 bg-green-100 border-green-200'
      case 'false':
        return 'text-red-600 bg-red-100 border-red-200'
      case 'uncertain':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200'
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200'
    }
  }

  const getStatusIcon = (veracity: string) => {
    switch (veracity) {
      case 'true':
        return '✅'
      case 'false':
        return '❌'
      case 'uncertain':
        return '⚠️'
      default:
        return '❓'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Try TrueCheck
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of AI-powered data verification and validation with Gemini API integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Data Verification
            </h2>
            
            {/* API Key Input */}
            <div className="mb-6">
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
                Gemini API Key
              </label>
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key"
                className="input-field"
              />
              <p className="text-sm text-gray-500 mt-1">
                Get your API key from{' '}
                <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                  Google AI Studio
                </a>
              </p>
            </div>

            {/* Verification Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Type
              </label>
              <select
                value={verificationType}
                onChange={(e) => setVerificationType(e.target.value)}
                className="input-field"
              >
                {verificationTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-1">
                {verificationTypes.find(t => t.value === verificationType)?.description}
              </p>
            </div>

            {/* Data Input */}
            <div className="mb-6">
              <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                Data to Verify
              </label>
              <textarea
                id="data"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter the data you want to verify..."
                rows={4}
                className="input-field"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleVerification}
              disabled={isLoading || !inputData.trim() || !apiKey.trim()}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Verify Data'}
            </button>
          </div>

          {/* Results Section */}
          <div className="card">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Verification Results
            </h2>
            
            {isLoading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Analyzing your data with Gemini AI...</p>
              </div>
            )}

            {!isLoading && results.length === 0 && (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-600">Enter data and click "Verify Data" to see results</p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${getStatusColor(result.veracity)}`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-xl">{getStatusIcon(result.veracity)}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold capitalize">
                          {result.type.replace('-', ' ')} Verification
                        </h3>
                        <div className="text-sm mt-2 space-y-2">
                          <p><strong>Veracity:</strong> {result.veracity}</p>
                          <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%</p>
                          <p><strong>AI Reasoning:</strong> {result.reasoning}</p>
                          <p><strong>Web Research:</strong> {result.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Input Data</h3>
              <p className="text-gray-600">Enter the data you want to verify and select the validation type</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600">Gemini AI analyzes your data using advanced validation algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Results</h3>
              <p className="text-gray-600">Receive detailed verification results with explanations and suggestions</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 