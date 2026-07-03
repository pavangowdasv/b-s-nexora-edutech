// Mock Firebase client to resolve IDE errors and allow local mock submission
export const db = {
  collection: () => ({}),
  doc: () => ({})
};

export interface Applicant {
  full_name: string;
  mobile_number: string;
  gmail_address: string;
  state: string;
}

export async function submitApplicant(data: Applicant): Promise<void> {
  console.log('[Firebase Mock Submit] Submitting applicant data:', data);
  
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
    console.log('[Firebase Mock Submit] Stored in localStorage successfully.');
  } catch (e) {
    console.error('[Firebase Mock Submit] Failed to save to localStorage:', e);
  }
}
