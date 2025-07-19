// User types
export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'viewer'
  createdAt: Date
  updatedAt: Date
}

// Verification types
export interface VerificationRule {
  id: string
  name: string
  description: string
  type: 'format' | 'range' | 'custom' | 'regex'
  config: Record<string, any>
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface VerificationResult {
  id: string
  ruleId: string
  dataId: string
  status: 'passed' | 'failed' | 'error'
  message: string
  details: Record<string, any>
  timestamp: Date
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Form types
export interface LoginForm {
  email: string
  password: string
}

export interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  external?: boolean
} 