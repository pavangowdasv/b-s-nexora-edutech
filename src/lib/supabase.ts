import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Check if credentials are set and are not placeholder values
const isConfigured = !!(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://YOUR_PROJECT_ID.supabase.co' &&
  supabaseAnonKey !== 'YOUR_ANON_PUBLIC_KEY' &&
  !supabaseUrl.includes('YOUR_PROJECT_ID')
);

if (!isConfigured) {
  console.warn(
    '[Supabase] Using Mock Mode: Missing or placeholder env variables VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
    'Please configure real credentials in .env.local or on Vercel.'
  );
}

export const supabase = isConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null;

// Type for a submitted applicant enquiry
export interface Applicant {
  id?: number;
  full_name: string;
  mobile_number: string;
  gmail_address: string;
  state: string;
  submitted_at?: string;
}

// Insert a new applicant row
export async function submitApplicant(data: Omit<Applicant, 'id' | 'submitted_at'>) {
  if (!isConfigured || !supabase) {
    console.log('[Supabase Mock Submit] Data:', data);
    // Simulate local network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return;
  }

  const { error } = await supabase.from('applicants').insert([
    {
      full_name: data.full_name,
      mobile_number: data.mobile_number,
      gmail_address: data.gmail_address,
      state: data.state,
    },
  ]);
  if (error) throw error;
}
