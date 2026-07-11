/**
 * Supabase Database Client
 *
 * Server-side only. Uses the service role key to bypass RLS.
 * Never import this module in client components.
 *
 * @module lib/supabase
 */

import { createClient } from '@supabase/supabase-js';

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Supabase credentials not configured');
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface LeadInsert {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  address: string;
  appointment_date: string;
  appointment_time: string;
  description: string;
  status: 'new';
}

// ── Operations ───────────────────────────────────────────────────────────────

/**
 * Insert a confirmed lead into the "leads" table.
 * Throws on error so the caller can handle it explicitly.
 */
export async function saveLead(data: LeadInsert): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from('leads').insert([data]);

  if (error) {
    throw new Error(`Failed to save lead: ${error.message}`);
  }
}
