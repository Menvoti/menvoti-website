/**
 * Static Data
 * 
 * Shared static data and constants used throughout the application.
 * 
 * @module data
 */

export const SERVICES = [
  {
    id: 'moebelmontage',
    name: 'Möbelmontage',
    description: 'Professioneller Aufbau von Möbeln',
  },
  {
    id: 'transporte',
    name: 'Transporte',
    description: 'Sichere Transporte für alle Bedarfe',
  },
  {
    id: 'umzughilfe',
    name: 'Umzugshilfe',
    description: 'Unterstützung beim Umzug',
  },
  {
    id: 'gartenarbeit',
    name: 'Gartenarbeit',
    description: 'Professionelle Gartenarbeiten',
  },
];

export const APPOINTMENT_STATUSES = [
  { value: 'scheduled', label: 'Geplant', color: 'blue' },
  { value: 'confirmed', label: 'Bestätigt', color: 'green' },
  { value: 'in_progress', label: 'In Bearbeitung', color: 'yellow' },
  { value: 'completed', label: 'Abgeschlossen', color: 'green' },
  { value: 'cancelled', label: 'Storniert', color: 'red' },
  { value: 'no_show', label: 'Nicht erschienen', color: 'gray' },
];

export const CUSTOMER_STATUSES = [
  { value: 'active', label: 'Aktiv' },
  { value: 'inactive', label: 'Inaktiv' },
  { value: 'prospect', label: 'Interessent' },
];

export const COMMUNICATION_METHODS = [
  { value: 'email', label: 'E-Mail' },
  { value: 'phone', label: 'Telefon' },
  { value: 'sms', label: 'SMS' },
  { value: 'whatsapp', label: 'WhatsApp' },
];

export const TIME_SLOTS = {
  morning: { label: 'Morgens (07:00 - 12:00)', value: 'morning' },
  afternoon: { label: 'Nachmittags (12:00 - 15:00)', value: 'afternoon' },
  evening: { label: 'Abends (15:00 - 22:00)', value: 'evening' },
};

export const REMINDER_OPTIONS = [
  { value: 15, label: '15 Minuten vor' },
  { value: 60, label: '1 Stunde vor' },
  { value: 1440, label: '1 Tag vor' },
];

export const LANGUAGES = [
  { value: 'de', label: 'Deutsch' },
  { value: 'en', label: 'English' },
];

export const TIMEZONES = [
  { value: 'Europe/Berlin', label: 'Mitteleuropäische Zeit' },
  { value: 'Europe/London', label: 'Britische Zeit' },
  { value: 'Europe/Paris', label: 'Westeuropäische Zeit' },
];
