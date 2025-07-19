# Gemini API Setup Guide

This guide will help you set up the Gemini API integration for the TrueCheck demo.

## 🚀 Getting Started

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (it will look like: `AIzaSyC...`)

### 2. Using the Demo

#### Option A: Enter API Key in Demo (Recommended)
1. Go to the [Demo page](/demo)
2. Enter your Gemini API key in the "Gemini API Key" field
3. Select the verification type
4. Enter the data you want to verify
5. Click "Verify Data"

#### Option B: Environment Variable (Advanced)
1. Create a `.env.local` file in the project root
2. Add your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. Restart the development server

## 🔧 API Key Security

- **Never commit your API key** to version control
- **Use environment variables** for production deployments
- **Rotate your API keys** regularly
- **Monitor your API usage** in Google AI Studio

## 📊 Supported Verification Types

### Email Validation
- Checks email format (user@domain.com)
- Validates domain structure
- Identifies common email issues

### Phone Number
- Validates phone number format
- Checks country codes
- Verifies proper length and structure

### Credit Card
- Validates credit card number patterns
- Checks Luhn algorithm
- Identifies card types

### Social Security Number
- Validates SSN format (XXX-XX-XXXX)
- Checks for test numbers
- Verifies proper structure

### Address
- Validates address components
- Checks formatting
- Identifies missing elements

### Custom Validation
- General data quality analysis
- Identifies common issues
- Provides improvement suggestions

## 🛠️ Troubleshooting

### Common Issues

1. **"Invalid API Key" Error**
   - Verify your API key is correct
   - Check that you copied the entire key
   - Ensure the key is active in Google AI Studio

2. **"API Quota Exceeded" Error**
   - Check your usage in Google AI Studio
   - Wait for quota reset or upgrade your plan

3. **"Network Error"**
   - Check your internet connection
   - Verify the API endpoint is accessible
   - Try again in a few minutes

### Getting Help

- Check the [Google AI Studio documentation](https://ai.google.dev/docs)
- Review the [Gemini API reference](https://ai.google.dev/api/gemini-api)
- Contact support if issues persist

## 🔒 Privacy & Security

- Your data is sent to Google's Gemini API for analysis
- No data is stored permanently on our servers
- API calls are logged for debugging purposes
- Consider data privacy when verifying sensitive information

## 📈 Usage Limits

- Free tier: 15 requests per minute
- Paid tier: Higher limits available
- Monitor usage in Google AI Studio dashboard

---

For more information, visit the [Google AI Studio](https://makersuite.google.com/app/apikey) or check our [documentation](/docs). 