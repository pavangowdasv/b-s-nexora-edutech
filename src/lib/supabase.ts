import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[Supabase] Missing env vars VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
    'Create a .env.local file with these values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
