# Google Custom Search API Setup Guide

This guide will help you set up Google Custom Search API for health verification in TrueCheck.

## 🚀 Step 1: Create Custom Search Engine

### 1.1 Go to Google Custom Search
- Visit: [https://cse.google.com/cse/](https://cse.google.com/cse/)
- Sign in with your Google account

### 1.2 Create New Search Engine
- Click "Add" to create a new search engine
- Fill in the details:
  - **Name**: "TrueCheck Health Verification"
  - **Description**: "Health verification search engine for medical claims and information"
  - **Search the entire web**: ✅ Check this box
  - **Sites to search**: Add these health domains:
    ```
    cdc.gov
    who.int
    webmd.com
    mayoclinic.org
    nih.gov
    fda.gov
    healthline.com
    medlineplus.gov
    ```

### 1.3 Get Search Engine ID
- After creating, click on your search engine
- Copy the **Search Engine ID** (looks like: `012345678901234567890:abcdefghijk`)

## 🔑 Step 2: Get Google API Key

### 2.1 Go to Google Cloud Console
- Visit: [https://console.cloud.google.com/](https://console.cloud.google.com/)
- Create a new project or select existing one

### 2.2 Enable Custom Search API
- Go to "APIs & Services" > "Library"
- Search for "Custom Search API"
- Click "Enable"

### 2.3 Create API Key
- Go to "APIs & Services" > "Credentials"
- Click "Create Credentials" > "API Key"
- Copy the API key

## ⚙️ Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Google Custom Search API Configuration
GOOGLE_SEARCH_API_KEY=your_google_search_api_key_here
GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🧪 Step 4: Test Your Setup

### 4.1 Test Search Engine
- Go back to your Custom Search Engine
- Click "Test" to verify it works
- Try searching for health-related terms

### 4.2 Test API
- Use the test endpoint in your application
- Verify you get results from health domains only

## 📊 Health Verification Types

The system will support these verification types:

### Medical Claims
- **Example**: "COVID vaccines cause autism"
- **Sources**: CDC, WHO, NIH
- **Search terms**: medical research, clinical studies, peer-reviewed

### Drug Information
- **Example**: "Ibuprofen dosage for adults"
- **Sources**: FDA, WebMD, Mayo Clinic
- **Search terms**: drug safety, dosage guidelines, side effects

### Symptom Analysis
- **Example**: "Headache and fever symptoms"
- **Sources**: Mayo Clinic, WebMD, Healthline
- **Search terms**: symptoms, diagnosis, medical conditions

### Treatment Verification
- **Example**: "Best treatment for diabetes"
- **Sources**: NIH, Mayo Clinic, CDC
- **Search terms**: treatment guidelines, medical recommendations

## 🔒 Security Notes

- **Never commit API keys** to version control
- **Use environment variables** for all sensitive data
- **Monitor API usage** in Google Cloud Console
- **Set up billing alerts** to avoid unexpected charges

## 📈 Usage Limits

- **Free tier**: 100 queries per day
- **Paid tier**: $5 per 1000 queries
- **Rate limit**: 10 queries per second

## 🆘 Troubleshooting

### Common Issues:
1. **"API key not valid"**: Check your API key and enable Custom Search API
2. **"Search engine not found"**: Verify your Search Engine ID
3. **"No results"**: Check your domain restrictions and search terms
4. **"Quota exceeded"**: Monitor usage in Google Cloud Console

### Getting Help:
- [Google Custom Search API Documentation](https://developers.google.com/custom-search/v1/overview)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Custom Search Engine Setup](https://cse.google.com/cse/)

---

Once you have your API key and Search Engine ID, the TrueCheck system will be ready to use Google Custom Search for health verification! 