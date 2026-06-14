import React, { useEffect } from 'react';
import { X, Shield, FileText, HeadphonesIcon, Info, Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type ModalType = 'privacy' | 'terms' | 'admissions' | 'information' | null;

interface FooterModalProps {
  activeModal: ModalType;
  onClose: () => void;
}

const modalContent: Record<NonNullable<ModalType>, { icon: React.ElementType; color: string; title: string; content: React.ReactNode }> = {
  privacy: {
    icon: Shield,
    color: 'text-blue-600',
    title: 'Privacy Policy',
    content: (
      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <p className="text-slate-500 text-xs font-medium">Last updated: June 2025 &nbsp;|&nbsp; Effective immediately</p>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">1. Information We Collect</h3>
          <p>When you register or submit an enquiry on B's Nexora Edutech, we collect the following personal information:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Full name, mobile number, and Gmail address</li>
            <li>State / region of residence (for batch allocation)</li>
            <li>Course preferences and academic background</li>
            <li>Device information and browsing activity on our website (via cookies)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>To process your admission enquiry and contact you promptly</li>
            <li>To send you course updates, schedule notifications, and study materials</li>
            <li>To improve our website experience and course offerings</li>
            <li>To comply with applicable Indian laws and regulations</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">3. Data Sharing & Third Parties</h3>
          <p>We do <strong>not</strong> sell, rent, or share your personal data with third parties for marketing purposes. We may share data with:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Government certification bodies for credential verification</li>
            <li>Payment gateways (for fee processing), under strict data agreements</li>
            <li>Technical service providers who operate our platform infrastructure</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">4. Data Security</h3>
          <p>We implement industry-standard security measures including SSL encryption, secure servers, and access controls to protect your personal information from unauthorized access, alteration, or disclosure.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">5. Cookies</h3>
          <p>Our website uses cookies to enhance your experience. You may disable cookies in your browser settings; however, some features may not function correctly without them.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">6. Your Rights</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Request access to or deletion of your personal data</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Lodge a complaint with the relevant data protection authority</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">7. Contact for Privacy Concerns</h3>
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-blue-700"><Mail className="w-4 h-4" /><span className="font-semibold">bsnexoraedutech@gmail.com</span></div>
            <div className="flex items-center gap-2 text-blue-700"><Phone className="w-4 h-4" /><span className="font-semibold">+91 8073254135</span></div>
          </div>
        </section>
      </div>
    ),
  },

  terms: {
    icon: FileText,
    color: 'text-violet-600',
    title: 'Terms of Service',
    content: (
      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <p className="text-slate-500 text-xs font-medium">Last updated: June 2025 &nbsp;|&nbsp; Please read carefully before enrolling</p>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">1. Acceptance of Terms</h3>
          <p>By accessing or enrolling in any course offered by <strong>B's Nexora Edutech</strong>, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">2. Course Enrolment</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Enrolment is confirmed only upon receipt of the full course fee</li>
            <li>Batch timings are allocated based on availability and your state</li>
            <li>You must be at least 15 years of age to enrol independently</li>
            <li>Course access is non-transferable to another individual</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">3. Fees & Refund Policy</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>All fees are non-refundable once course access is granted</li>
            <li>In the event of a batch cancellation by B's Nexora Edutech, a full refund or reschedule will be offered</li>
            <li>No refunds will be issued for partial completion of a course</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">4. Code of Conduct</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Students must maintain respectful conduct in all sessions and community spaces</li>
            <li>Sharing course materials or recordings with third parties is strictly prohibited</li>
            <li>Any form of academic dishonesty or plagiarism may result in immediate disqualification</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">5. Certification</h3>
          <p>Certificates are issued only upon successful completion of the course requirements, including attendance thresholds and final assessments. Government-recognized certifications are subject to the issuing body's rules.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">6. Intellectual Property</h3>
          <p>All course content, materials, videos, and resources are the intellectual property of B's Nexora Edutech. Unauthorized reproduction or distribution is a violation of copyright law.</p>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">7. Governing Law</h3>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.</p>
        </section>
      </div>
    ),
  },

  admissions: {
    icon: HeadphonesIcon,
    color: 'text-emerald-600',
    title: 'Admissions Support',
    content: (
      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 space-y-1">
          <p className="font-bold text-emerald-800 text-base">We're here to help you get started!</p>
          <p className="text-emerald-700 text-xs">Our admissions team is available to guide you through every step of your enrolment journey.</p>
        </div>

        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 text-base">📞 Contact Our Admissions Desk</h3>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0"><Phone className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Call / WhatsApp</p>
                <p className="font-bold text-slate-900">+91 8073254135</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Mail className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email Us</p>
                <p className="font-bold text-slate-900">bsnexoraedutech@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0"><Clock className="w-5 h-5" /></div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Support Hours</p>
                <p className="font-bold text-slate-900">Mon – Sat &nbsp;|&nbsp; 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 text-base">🎓 Enrolment Process</h3>
          <ol className="space-y-3">
            {[
              { step: '01', title: 'Submit Enquiry', desc: 'Fill our online enquiry form with your name, mobile, Gmail, and state.' },
              { step: '02', title: 'Counsellor Call', desc: 'Our academic counsellor will call you within 24 hours to discuss course options.' },
              { step: '03', title: 'Select Your Course', desc: 'Choose from our range of certified programs based on your goals and schedule.' },
              { step: '04', title: 'Fee Payment', desc: 'Complete fee payment via UPI, bank transfer, or other supported methods.' },
              { step: '05', title: 'Batch Allocation', desc: 'Get your batch timing, login credentials, and onboarding materials.' },
              { step: '06', title: 'Start Learning!', desc: 'Begin your live online classes and access all study resources.' },
            ].map(({ step, title, desc }) => (
              <li key={step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">{step}</div>
                <div>
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">📋 Eligibility</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Open to students from Class 8 onwards, college students, and working professionals</li>
            <li>No prior programming or IT experience required for most courses</li>
            <li>Basic computer and internet access is required</li>
            <li>Available across all states in India (online delivery)</li>
          </ul>
        </section>
      </div>
    ),
  },

  information: {
    icon: Info,
    color: 'text-amber-600',
    title: 'About B\'s Nexora Edutech',
    content: (
      <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
        <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-5">
          <img src="/logo.png" alt="B's Nexora Edutech" className="w-16 h-16 object-contain shrink-0" />
          <div>
            <p className="font-black text-slate-900 text-base">B's Nexora Edutech</p>
            <p className="text-amber-700 text-xs font-semibold italic">• Code, Create and Conquer •</p>
            <p className="text-slate-500 text-xs mt-1">Govt. Recognized Online Certification Hub</p>
          </div>
        </div>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">🏛️ Who We Are</h3>
          <p>B's Nexora Edutech is a government-recognized online learning platform dedicated to equipping students, freshers, and professionals with industry-relevant technical skills through structured, mentor-led training programs. Our motto — <em>"Code, Create and Conquer"</em> — reflects our commitment to practical, outcome-driven education.</p>
        </section>

        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 text-base">📊 Platform Highlights</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: '15,000+', label: 'Active Learners' },
              { value: '95%', label: 'Success Rate' },
              { value: '10+', label: 'Certified Courses' },
              { value: '100%', label: 'Online Delivery' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
                <p className="text-2xl font-black text-amber-700">{value}</p>
                <p className="text-xs text-slate-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">📚 Our Courses</h3>
          <div className="space-y-2">
            {[
              'Web Designing (HTML, CSS, JavaScript)',
              'Python Programming',
              'Office Automation (MS Office Suite)',
              'Cyber Security Fundamentals',
              'Kannada Typing & DTP',
              'Basic Computer & Internet Skills',
            ].map((course) => (
              <div key={course} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-slate-700">{course}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-slate-900 text-base">🎯 Our Mission</h3>
          <p>To bridge the digital skill gap by providing affordable, accessible, and government-recognized online certification programs that empower every learner to thrive in the technology-driven world.</p>
        </section>

        <section className="space-y-3">
          <h3 className="font-bold text-slate-900 text-base">📍 Get in Touch</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-600"><Phone className="w-4 h-4 text-amber-600" /><span><strong>+91 8073254135</strong></span></div>
            <div className="flex items-center gap-2 text-slate-600"><Mail className="w-4 h-4 text-amber-600" /><span><strong>bsnexoraedutech@gmail.com</strong></span></div>
            <div className="flex items-center gap-2 text-slate-600"><MapPin className="w-4 h-4 text-amber-600" /><span>Karnataka, India (Online – Pan India)</span></div>
          </div>
        </section>
      </div>
    ),
  },
};

export default function FooterModal({ activeModal, onClose }: FooterModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {activeModal && (() => {
        const { icon: Icon, color, title, content } = modalContent[activeModal];
        return (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal Panel */}
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 tracking-tight">{title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 px-6 py-6">
                {content}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/60 shrink-0 flex items-center justify-between">
                <p className="text-xs text-slate-400 font-medium">© {new Date().getFullYear()} B's Nexora Edutech</p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>
  );
}
