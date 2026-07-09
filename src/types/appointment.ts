/**
 * Appointment Types
 * 
 * Type definitions for appointment and scheduling functionality.
 * 
 * @module types/appointment
 */

export interface Appointment {
  id: string;
  customerId: string;
  serviceId: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';
  type: 'consultation' | 'service' | 'follow_up' | 'emergency';
  location?: string;
  attendees?: string[];
  notes?: string;
  reminders?: Reminder[];
  attachments?: string[];
  customFields?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppointmentTemplate {
  id: string;
  name: string;
  serviceId: string;
  defaultDuration: number; // minutes
  description?: string;
  bufferTime: number; // minutes before/after
  maxParticipants: number;
}

export interface TimeSlot {
  id: string;
  startTime: Date;
  endTime: Date;
  available: boolean;
  booked?: boolean;
}

export interface AvailabilityRule {
  id: string;
  serviceId: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
  breakTimes?: TimeRange[];
  blackoutDates?: Date[];
  isActive: boolean;
}

export interface TimeRange {
  start: string; // HH:mm
  end: string;   // HH:mm
}

export interface Reminder {
  id: string;
  appointmentId: string;
  type: 'email' | 'sms' | 'push';
  minutesBefore: number;
  sent: boolean;
  sentAt?: Date;
}

export interface AppointmentAnalytics {
  totalAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  noShowCount: number;
  averageDuration: number;
  completionRate: number; // percentage
  cancellationRate: number; // percentage
  noShowRate: number; // percentage
}

export interface AppointmentHistory {
  appointmentId: string;
  action: 'created' | 'updated' | 'cancelled' | 'completed';
  timestamp: Date;
  changes?: Record<string, unknown>;
  changedBy: string;
}
