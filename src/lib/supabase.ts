// Mock Supabase client to resolve IDE errors and allow local mock submission
export const supabase = {
  from: () => ({
    insert: async () => ({ error: null })
  })
};

export interface Applicant {
  id?: number;
  full_name: string;
  mobile_number: string;
  gmail_address: string;
  state: string;
  submitted_at?: string;
}

export async function submitApplicant(data: Omit<Applicant, 'id' | 'submitted_at'>) {
  console.log('[Supabase Mock Submit] Submitting applicant data:', data);
  
  // Simulate local network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  try {
    const key = 'nexora_applicants';
    const existing = localStorage.getItem(key);
    const applicants = existing ? JSON.parse(existing) : [];
    applicants.push({
      ...data,
      submitted_at: new Date().toISOString()
    });
    localStorage.setItem(key, JSON.stringify(applicants));
    console.log('[Supabase Mock Submit] Stored in localStorage successfully.');
  } catch (e) {
    console.error('[Supabase Mock Submit] Failed to save to localStorage:', e);
  }
}
