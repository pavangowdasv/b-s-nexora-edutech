import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  Code, 
  Terminal, 
  Keyboard, 
  FileSpreadsheet, 
  ShieldCheck, 
  IndianRupee, 
  CheckCircle, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Loader2,
  Calendar,
  Layers,
  Sparkles,
  X,
  Clock,
  BookOpen
} from 'lucide-react';
import React, { useState } from 'react';

interface CoursesPageProps {
  onContactClickFromCard: (courseTitle?: string) => void;
}

export default function CoursesPage({ onContactClickFromCard }: CoursesPageProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any | null>(null);

  const handleModalContactClick = (courseTitle: string) => {
    setSelectedCourse(null);
    setTimeout(() => {
      onContactClickFromCard(courseTitle);
    }, 150);
  };

  // Form validator
  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Please provide your name';
    if (!form.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!form.message.trim()) {
      errs.message = 'Please input your message';
    } else if (form.message.trim().length < 5) {
      errs.message = 'Message should be at least 5 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const coursesList = [
    {
      id: 'course-web',
      title: 'Web Designing Course',
      fee: '₹15,000',
      duration: '3 Months',
      icon: Laptop,
      color: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      details: [
        'Duration: 3 Months',
        'Hands-on Experience',
        'Live Projects',
        'Responsive Website Design',
        'HTML, CSS, JavaScript Basics',
        'Certification Included'
      ],
      overview: 'Our Web Designing Course is ideal for beginners and aspiring professionals looking to design responsive, functional, and visually striking websites. Learn the latest front-end technologies and build valuable development skills valued in today’s career landscape.',
      skills: [
        'HTML5 Semantic Markup',
        'CSS3 Responsive Grids & Flexbox Layouts',
        'Vanilla JavaScript & DOM Manipulation',
        'Responsive Website Design Frameworks',
        'Interactive User Interface Styles',
        'Web Hosting Basics & Publishing Projects'
      ],
      benefits: [
        'High-velocity 3 Months Duration',
        'Hands-on Experience with live servers',
        'Tackle Real-world Web Design Tasks',
        'Official course completion certificate',
        'Dynamic resume-building guidance'
      ],
      certification: 'Earn a recognized Web Designing Completion Certificate from B\'s Nexora Edutech after passing your final live website project review.',
      learningOutcomes: [
        'Design complete user-friendly responsive layouts',
        'Write clean, accessible, and standards-compliant code',
        'Manage website assets and configure real web domains',
        'Master core styles, typography pairings, and layout debugging'
      ]
    },
    {
      id: 'course-python-basic',
      title: 'Python Programming (Basic)',
      fee: '₹8,000',
      duration: '1.5 Months',
      icon: Code,
      color: 'bg-[#9333ea]/10 text-[#9333ea] border-[#9333ea]/20',
      details: [
        'Python Fundamentals',
        'Variables and Data Types',
        'Loops and Functions',
        'Basic Projects',
        'Certification Included'
      ],
      overview: 'Master python coding core syntax and logic rules from the ground up. This course is specially designed for absolute beginners to gain robust confidence in logic and backend fundamentals.',
      skills: [
        'Python Environment Setup & Execution',
        'Variables, Mathematical & Comparison Operators',
        'Conditional Checking & Iteration Loops',
        'Standard Functions & Dynamic Arguments',
        'Managing Strings, Arrays, & Lists Structures'
      ],
      benefits: [
        'Perfect start line for non-CS students',
        'Tons of interactive code exercises and quizzes',
        'Basic real-world learning projects',
        'Get a core professional coding certification',
        'Supportive instructors assisting you step-by-step'
      ],
      certification: 'Acquire your Basic Python Competency Certificate, adding credible computer programming credentials to your professional profile.',
      learningOutcomes: [
        'Explain structural code patterns and control logs',
        'Formulate scripts to execute mathematical calculations',
        'Craft custom logical functions with multiple inputs',
        'Examine and debug compilation and run syntax issues easily'
      ]
    },
    {
      id: 'course-python-adv',
      title: 'Python Programming (Advanced)',
      fee: '₹15,999',
      duration: '2.5 Months',
      icon: Terminal,
      color: 'bg-[#06b6d4]/10 text-[#06b6d4] border-[#06b6d4]/20',
      details: [
        'Advanced Python Concepts',
        'Object-Oriented Programming',
        'File Handling',
        'Real-World Projects',
        'Advanced Modules',
        'Certification Included'
      ],
      overview: 'Develop modern enterprise product capabilities using Advanced Python. Deep dive into standard Object-Oriented paradigms (OOP), files formatting streams, complex dataset automations, and library modules.',
      skills: [
        'Object-Oriented Programming (Classes & Inheritance)',
        'Data File Handling & Local Storage read-writes',
        'Python Modules & System Library implementations',
        'Robust Exception Handling & Custom errors routing',
        'Real-World software projects packaging'
      ],
      benefits: [
        'Develop real-world software project experience',
        'Advanced concepts matching industry requirements',
        'Certification of high programming literacy',
        'Mentor portfolio reviews and code cleanups',
        'Deep development insight for corporate jobs'
      ],
      certification: 'Secure an Advanced Python Programming Specialist Certificate, verifying your capability to architect backend classes and systems.',
      learningOutcomes: [
        'Architect modular scalable programs using OOP structures',
        'Manipulate dynamic filesystem data folders securely',
        'Optimize execution algorithms and script safety parameters',
        'Perform basic automated queries and parse composite structures'
      ]
    },
    {
      id: 'course-kannada',
      title: 'Kannada Nudi Typing',
      fee: '₹6,000',
      duration: '1.5 Months',
      icon: Keyboard,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      details: [
        'Kannada Typing Skills',
        'Nudi Software Training',
        'Practical Exercises',
        'Speed Improvement Techniques',
        'Certification Included'
      ],
      overview: 'Learn professional Kannada Typing inside the official state Nudi software framework. This training is standard for candidates targeting state governmental exams or office admin secretarial roles where fast Kannada rendering is key.',
      skills: [
        'Nudi Keyboard Layout Configuration',
        'Vowel-Consonant Phonetics transliteration keys',
        'Touch-typing fingers distribution layouts',
        'State government drafted format guidelines',
        'Solving system typography orientations'
      ],
      benefits: [
        'Highly optimized physical typing lab sessions',
        'Continuous finger speed tracking metrics',
        'Official Nudi Typist completion certificate',
        'Accompanying training materials and offline guides',
        'Affordable friendly fee system structure'
      ],
      certification: 'Secure a Kannada Nudi Typist Certification stating your speed milestones and typing accuracy values.',
      learningOutcomes: [
        'Touch-type long documents in Kannada rapidly',
        'Produce corporate records and files using Nudi software',
        'Speed up your standard keyboard typing metrics',
        'Succeed in state administration service examinations'
      ]
    },
    {
      id: 'course-automation',
      title: 'Office Automation',
      fee: '₹8,000',
      duration: '2 Months',
      icon: FileSpreadsheet,
      color: 'bg-[#f43f5e]/10 text-[#f43f5e] border-[#f43f5e]/20',
      details: [
        'MS Word',
        'MS Excel',
        'MS PowerPoint',
        'Document Management',
        'Practical Exercises',
        'Certification Included'
      ],
      overview: 'Acquire fluent handling of global office computing applications. Master advanced documentation reports formatting, mathematical spreadsheet workbooks formulas, and captivating presentational slides.',
      skills: [
        'MS Word (Formats, Trackings & Mail Merges)',
        'MS Excel (VLOOKUP, Pivot, Custom Formulas & Plots)',
        'MS PowerPoint (Transitions, Themes & Visual Slides)',
        'Basic desktop document tracking and local backups',
        'System output printing structures and guidelines'
      ],
      benefits: [
        'Fully practical computing exercises',
        'Free template bundles for instant career applications',
        'Recognized automation specialist certificate',
        'Doubt-solving with expert trainers',
        'Improve confidence executing daily office jobs'
      ],
      certification: 'Achieve an Office Automation Proficiency Certificate, asserting high digital productivity competence.',
      learningOutcomes: [
        'Draft perfectly customized professional letters, reports, and templates',
        'Examine records with smart interactive analytical calculations',
        'Design business presentations with clear communication flows',
        'Coordinate electronic documents securely in local administrative drives'
      ]
    },
    {
      id: 'course-cyber',
      title: 'Cyber Security Training',
      fee: '₹10,000',
      duration: '2.5 Months',
      icon: ShieldCheck,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
      details: [
        'Cyber Security Fundamentals',
        'Ethical Hacking Basics',
        'Online Safety Practices',
        'Security Awareness',
        'Practical Demonstrations',
        'Certification Included'
      ],
      overview: 'Protect your computer devices and digital privacy against vulnerabilities. Master base-level threat prevention, password hygiene, basic network scans, and protective security practices.',
      skills: [
        'Security Triad Foundations & Risk Mitigation',
        'Basic Ethical Hacking terms & System Mapping',
        'System Protection & Cryptography Essentials',
        'Online Safety Practices and digital footprints hygiene',
        'Identifying common phishing schemes and software exploits'
      ],
      benefits: [
        'Visual, impact-oriented ethical testing demos',
        'Simulated threat defense situations',
        'Official Cyber Security Awareness Certificate included',
        'Updated threat landscapes study material guides',
        'Direct guidance on cybersecurity career fields'
      ],
      certification: 'Obtain an Accredited Cyber Security Associate Certification from B\'s Nexora Edutech upon successful review.',
      learningOutcomes: [
        'Formulate highly protected local home & workspace systems',
        'Quickly detect and stop visual spoofing and malicious web links',
        'Draft safe password guidelines for complex networks',
        'Understand safe networking security practices'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-12 w-full font-sans text-on-background"
    >
      {/* Hero Title Header Area */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent py-16 sm:py-20 border-b border-outline-variant/30 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary font-bold text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-bounce" /> High-Fidelity Curriculum
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
            Our Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-sans">
            Industry-focused training programs designed to build practical skills and improve career opportunities.
          </p>
        </div>
      </div>

      {/* Grid of Courses */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesList.map((course, idx) => {
              const IconComponent = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative flex flex-col justify-between bg-white border border-outline-variant rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Glowing Outline effect on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 pointer-events-none" />
                  
                  <div className="space-y-6">
                    {/* Icon and badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all group-hover:scale-110 duration-300 ${course.color}`}>
                        <IconComponent className="w-7 h-7 stroke-[2]" />
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-on-surface-variant block uppercase font-bold tracking-wider">Tuition Fee</span>
                        <div className="inline-flex items-center gap-0.5 text-xl sm:text-2xl font-black text-primary">
                          <span>{course.id === 'course-python-basic' ? '₹8,000' : course.fee}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content text */}
                    <div className="space-y-2 text-left">
                      <h3 className="text-lg sm:text-xl font-bold font-sans text-on-background group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <div className="w-8 h-1 bg-primary/20 rounded-full transition-all group-hover:w-16 duration-300" />
                    </div>

                    {/* Details points */}
                    <ul className="space-y-2.5 text-left pt-2">
                      {course.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-sm text-on-surface-variant font-sans font-medium">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions wrapper */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full py-3 bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold text-sm rounded-full shadow-sm hover:shadow-md hover:shadow-primary/10 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Highlighted Extra Note Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-primary/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-sm shrink-0 border border-outline-variant/50">
                <Award className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">All-Inclusive Training Program</h4>
                <p className="text-sm text-on-surface-variant font-medium font-sans">
                  "All courses include study materials and certification."
                </p>
              </div>
            </div>
            
            <button
              onClick={onContactClickFromCard}
              className="px-8 py-3.5 bg-primary text-white hover:bg-primary-container font-bold text-sm rounded-full shadow-lg shadow-primary/15 hover:shadow-primary/25 duration-300 transition-all shrink-0 cursor-pointer"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Prominent Courses Contact Section */}
      <section id="contact-courses" className="py-20 sm:py-24 bg-surface-container border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left coordinates column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">Reach our advisors</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Admissions Help
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant font-medium leading-relaxed font-sans">
                Ready to enlist or have queries regarding the syllabus and certificates? Reach out to our training desk directly.
              </p>

              {/* Coordinates Points showing requested Phone and Custom Email */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-4 text-on-surface">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-on-surface-variant block font-bold uppercase tracking-wider">Call Training Desk</span>
                    <p className="text-base sm:text-lg font-black text-on-background select-all">8073254135</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-on-surface">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-on-surface-variant block font-bold uppercase tracking-wider">Email Inquiry</span>
                    <p className="text-base sm:text-lg font-black text-on-background select-all break-all">bsnexoraedutech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-on-surface">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-on-surface-variant block font-bold uppercase tracking-wider">Learning Hub</span>
                    <p className="text-sm font-semibold text-on-surface">Bangalore Learning Office, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7 w-full">
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-outline-variant shadow-md text-left relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="courses-contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleFormSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-on-surface-variant">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className={`w-full rounded-xl border px-4 py-3 bg-white text-sm transition-all font-sans ${
                              errors.name ? 'border-red-500 focus:ring-3 focus:ring-red-100' : 'border-outline-variant focus:border-primary focus:ring-3 focus:ring-primary/10'
                            }`}
                          />
                          {errors.name && <p className="text-[10px] text-red-500 font-medium">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-on-surface-variant">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="your.email@gmail.com"
                            className={`w-full rounded-xl border px-4 py-3 bg-white text-sm transition-all font-sans ${
                              errors.email ? 'border-red-500 focus:ring-3 focus:ring-red-100' : 'border-outline-variant focus:border-primary focus:ring-3 focus:ring-primary/10'
                            }`}
                          />
                          {errors.email && <p className="text-[10px] text-red-500 font-medium">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Message Area */}
                      <div className="space-y-1 font-sans">
                        <label className="text-xs font-bold text-on-surface-variant">Message</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleInputChange}
                          placeholder="Tell us which course you are interested in..."
                          rows={4}
                          className={`w-full rounded-xl border px-4 py-3 bg-white text-sm transition-all font-sans ${
                            errors.message ? 'border-red-500 focus:ring-3 focus:ring-red-100' : 'border-outline-variant focus:border-primary focus:ring-3 focus:ring-primary/10'
                          }`}
                        />
                        {errors.message && <p className="text-[10px] text-red-500 font-medium">{errors.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <button
                        id="courses-contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-sm hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md active:translate-y-[1px] disabled:opacity-55 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" /> Submitting Inquiry...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-prompt"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold font-sans text-on-background">Inquiry Received!</h4>
                        <p className="text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                          We will call you back at 8073254135 or reply to your email shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-all font-sans"
                      >
                        New Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/55 flex flex-col overflow-hidden max-h-[85vh]"
            >
              {/* Header block with color theme */}
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedCourse.color}`}>
                    {React.createElement(selectedCourse.icon, { className: 'w-5.5 h-5.5 stroke-[2]' })}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase block">Course Details</span>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{selectedCourse.title}</h2>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-10 h-10 rounded-full hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors border border-slate-100 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 font-sans text-left animate-in fade-in-50 duration-200">
                
                {/* Stats / Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4.5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Duration</span>
                      <p className="text-lg font-extrabold text-primary flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-4.5 h-4.5 text-primary shrink-0" />
                        {selectedCourse.duration}
                      </p>
                    </div>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4.5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Course Tuition Fee</span>
                      <p className="text-lg font-extrabold text-emerald-600 flex items-center gap-1 mt-0.5">
                        <span className="font-extrabold">₹</span>
                        {selectedCourse.fee === '₹15,999' ? '15,999' : selectedCourse.fee.replace('₹', '')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Course Overview */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase flex items-center gap-2">
                    <div className="w-1.5 h-3.5 bg-primary rounded-full animate-pulse" /> Course Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {selectedCourse.overview}
                  </p>
                </div>

                {/* Dual Column for Skills & Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
                  
                  {/* Skills Covered */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase flex items-center gap-2">
                      <div className="w-1.5 h-3.5 bg-primary rounded-full" /> Skills Covered
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedCourse.skills.map((skill: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 font-normal">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Benefits */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase flex items-center gap-2">
                      <div className="w-1.5 h-3.5 bg-primary rounded-full" /> Course Benefits
                    </h4>
                    <ul className="space-y-2.5">
                      {selectedCourse.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 font-normal">
                          <CheckCircle className="w-4 h-4 text-[#9333ea] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Learning Outcomes */}
                <div className="space-y-3.5 pt-2">
                  <h4 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase flex items-center gap-2">
                    <div className="w-1.5 h-3.5 bg-primary rounded-full" /> Learning Outcomes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.learningOutcomes.map((outcome: string, index: number) => (
                      <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certification Info */}
                <div className="bg-gradient-to-r from-primary/5 via-slate-100/50 to-primary/5 border border-primary/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-primary/20 rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-primary tracking-wider uppercase">Certification Information</h5>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {selectedCourse.certification}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer Call To Action */}
              <div className="px-6 sm:px-8 py-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 bg-slate-50 justify-between">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Course Fees</span>
                  <div className="text-xl sm:text-2xl font-black text-primary select-all">
                    {selectedCourse.fee} <span className="text-xs font-normal text-slate-500">All inclusive</span>
                  </div>
                </div>

                <button
                  onClick={() => handleModalContactClick(selectedCourse.title)}
                  className="w-full sm:w-auto px-10 py-3.5 bg-primary text-white hover:bg-primary-container font-black text-sm rounded-full shadow-lg shadow-primary/15 hover:shadow-primary/25 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Contact Us to Enroll
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
