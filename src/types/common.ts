/**
 * Common Types
 * 
 * Shared type definitions used across the application.
 * 
 * @module types/common
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: Date;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterOptions {
  search?: string;
  filters?: Record<string, unknown>;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  permissions: Permission[];
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'admin' | 'agent' | 'manager' | 'customer' | 'viewer';

export type Permission = 
  | 'read:appointments'
  | 'create:appointments'
  | 'update:appointments'
  | 'delete:appointments'
  | 'read:customers'
  | 'create:customers'
  | 'update:customers'
  | 'delete:customers'
  | 'read:reports'
  | 'manage:users'
  | 'manage:settings';

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  changes?: Record<string, unknown>;
  ip?: string;
  userAgent?: string;
  timestamp: Date;
}
