# TrueCheck

A modern verification and validation system for ensuring data integrity, authenticity, and accuracy across all your digital assets and processes.

## 🚀 Features

- **Data Verification**: Automatically verify the integrity and authenticity of your data with advanced cryptographic algorithms
- **Real-time Validation**: Get instant feedback on data quality, format compliance, and business rule validation
- **Audit Trail**: Complete visibility into all verification activities with detailed logs and audit reports
- **API Integration**: Seamlessly integrate verification services into your existing applications and workflows
- **Custom Rules**: Define your own validation rules and business logic to match your specific requirements
- **Security First**: Enterprise-grade security with encryption, access controls, and compliance certifications
- **AI-Powered Demo**: Interactive demo with Gemini API integration for real-time data verification

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd truecheck
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

5. **Try the Demo**
   Visit [http://localhost:3000/demo](http://localhost:3000/demo) to test the Gemini API integration.
   See [GEMINI_SETUP.md](GEMINI_SETUP.md) for setup instructions.

## 🏗️ Project Structure

```
truecheck/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features showcase
│   │   └── Footer.tsx       # Footer component
│   ├── lib/                 # Utility libraries
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`. You can modify the primary and secondary colors to match your brand:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
    900: '#1e3a8a',
  },
  secondary: {
    // ... secondary color palette
  },
}
```

### Components
All components are located in `src/components/` and can be easily customized. The project uses a modular approach, making it simple to add, remove, or modify components.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help or have questions:
- Create an issue in the repository
- Contact us at support@truecheck.com
- Check our documentation at docs.truecheck.com

## 🔮 Roadmap

- [ ] User authentication and authorization
- [ ] Dashboard with analytics
- [ ] API documentation
- [ ] Mobile app
- [ ] Advanced validation rules engine
- [ ] Integration marketplace
- [ ] Enterprise features

---

Built with ❤️ by the TrueCheck team 