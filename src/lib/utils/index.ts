/**
 * Utility Functions
 * 
 * Common utility functions used throughout the application.
 * 
 * @module lib/utils
 */

/**
 * Format date to readable string
 * 
 * @param date - Date to format
 * @param format - Format string (default: 'DD.MM.YYYY HH:mm')
 * @returns Formatted date string
 */
export function formatDate(date: Date, format: string = 'DD.MM.YYYY HH:mm'): string {
  // TODO: Implement date formatting logic
  return date.toLocaleString('de-DE');
}

/**
 * Validate email address
 * 
 * @param email - Email to validate
 * @returns Validation result
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate UUID
 * 
 * @returns Generated UUID
 */
export function generateUUID(): string {
  // TODO: Implement UUID generation
  return crypto.randomUUID();
}

/**
 * Sanitize user input
 * 
 * @param input - Input to sanitize
 * @returns Sanitized input
 */
export function sanitizeInput(input: string): string {
  // TODO: Implement input sanitization
  return input.trim();
}

/**
 * Debounce function
 * 
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  // TODO: Implement debounce logic
  return () => undefined;
}

/**
 * Deep clone object
 * 
 * @param obj - Object to clone
 * @returns Cloned object
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Convert error to readable message
 * 
 * @param error - Error object
 * @returns Error message
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

/**
 * Retry function with exponential backoff
 * 
 * @param fn - Function to retry
 * @param maxAttempts - Maximum retry attempts
 * @param delayMs - Initial delay in milliseconds
 * @returns Promise resolving to function result
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delayMs: number = 1000
): Promise<T> {
  // TODO: Implement retry logic with exponential backoff
  throw new Error('retry not implemented');
}
