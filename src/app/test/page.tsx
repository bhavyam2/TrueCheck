export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎉 TrueCheck is Working!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your project is successfully set up and running.
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              ✅ What's Working
            </h2>
            <ul className="text-left text-gray-600 space-y-1">
              <li>• Next.js 14 with App Router</li>
              <li>• TypeScript configuration</li>
              <li>• Tailwind CSS styling</li>
              <li>• Component structure</li>
              <li>• ESLint configuration</li>
              <li>• Project documentation</li>
            </ul>
          </div>
          <a 
            href="/" 
            className="inline-block btn-primary"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  )
} 