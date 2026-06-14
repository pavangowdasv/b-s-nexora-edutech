import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration for B's Nexora Edutech project
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialise (or reuse) the Firebase app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);

// Type for a submitted applicant enquiry
export interface Applicant {
  full_name: string;
  mobile_number: string;
  gmail_address: string;
  state: string;
}

// Insert a new applicant document into the 'applicants' Firestore collection
export async function submitApplicant(data: Applicant): Promise<void> {
  await addDoc(collection(db, 'applicants'), {
    ...data,
    submitted_at: serverTimestamp(),
  });
}
