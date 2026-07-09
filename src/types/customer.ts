/**
 * Customer Types
 * 
 * Type definitions for customer and user data.
 * 
 * @module types/customer
 */

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: Address;
  company?: string;
  status: 'active' | 'inactive' | 'prospect';
  tags?: string[];
  notes?: string;
  preferences?: CustomerPreferences;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  houseNumber?: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface CustomerPreferences {
  communicationMethod: 'email' | 'phone' | 'sms' | 'whatsapp';
  language: string;
  timezone: string;
  marketingConsent: boolean;
}

export interface CustomerSegment {
  id: string;
  name: string;
  description?: string;
  criteria: SegmentCriteria;
  customerCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SegmentCriteria {
  status?: string[];
  tags?: string[];
  minValue?: number;
  maxValue?: number;
  customFields?: Record<string, unknown>;
}

export interface CustomerInteraction {
  id: string;
  customerId: string;
  type: 'email' | 'phone' | 'meeting' | 'quote' | 'appointment';
  date: Date;
  summary?: string;
  notes?: string;
}

export interface CustomerValue {
  customerId: string;
  totalSpent: number;
  appointmentCount: number;
  lastInteraction: Date;
  lifetime: number; // days
  score: number; // customer lifetime value score
}
