export interface Course {
  id: string;
  category: 'Engineering' | 'Design' | 'Development';
  title: string;
  description: string;
  image: string;
  duration: string;
  lessons: number;
  rating: number;
  mentor: string;
  syllabus: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarBg: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
