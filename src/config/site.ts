/**
 * Site Configuration
 * 
 * Centralized configuration for the entire application.
 * 
 * @module config/site
 */

export const siteConfig = {
  // Application metadata
  name: 'MENVOTI AI Platform',
  description: 'Professional AI-powered service automation and scheduling platform',
  version: '1.0.0',
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',

  // Feature flags
  features: {
    aiChat: true,
    scheduling: true,
    customerManagement: true,
    automations: true,
    analytics: true,
  },

  // API configuration
  api: {
    openai: {
      baseUrl: 'https://api.openai.com/v1',
      model: 'gpt-4-turbo-preview',
      timeout: 30000,
    },
    supabase: {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    resend: {
      baseUrl: 'https://api.resend.com',
      timeout: 10000,
    },
  },

  // Database configuration
  database: {
    maxConnections: 10,
    connectionTimeout: 5000,
    logQueries: process.env.NODE_ENV === 'development',
  },

  // Email configuration
  email: {
    defaultFrom: 'noreply@menvoti.de',
    replyTo: 'support@menvoti.de',
    templates: {
      dir: 'src/emails',
      cacheTemplates: true,
    },
  },

  // Pagination defaults
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
  },

  // Rate limiting
  rateLimit: {
    enabled: true,
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
  },

  // Session configuration
  session: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: 'json',
    destination: 'stdout',
  },

  // Security
  security: {
    enableCSRF: true,
    enableCORS: true,
    corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
    enableRateLimit: true,
    enableAuditLog: true,
  },
} as const;

export default siteConfig;
