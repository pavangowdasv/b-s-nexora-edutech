import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Laptop, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp, 
  HeartHandshake, 
  Smile, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Loader2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface BenefitsPageProps {
  onContactClickFromBtn: () => void;
}

export default function BenefitsPage({ onContactClickFromBtn }: BenefitsPageProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const benefitsList = [
    {
      id: 'benefit-1',
      title: 'Industry-Relevant Skills',
      description: 'Learn modern technologies and practical skills that are highly demanded by employers.',
      icon: Cpu,
      color: 'text-primary bg-primary/10 border-primary/20',
    },
    {
      id: 'benefit-2',
      title: 'Hands-On Training',
      description: 'Gain real-world experience through projects, assignments, and practical exercises.',
      icon: Laptop,
      color: 'text-blue-600 bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'benefit-3',
      title: 'Expert Guidance',
      description: 'Receive mentorship and support from experienced instructors throughout your learning journey.',
      icon: Users,
      color: 'text-[#9333ea] bg-[#9333ea]/10 border-[#9333ea]/20',
    },
    {
      id: 'benefit-4',
      title: 'Certification',
      description: 'Earn recognized course completion certificates to strengthen your resume.',
      icon: Award,
      color: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      id: 'benefit-5',
      title: 'Study Materials Included',
      description: 'Access comprehensive learning resources, notes, and reference materials.',
      icon: BookOpen,
      color: 'text-indigo-600 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      id: 'benefit-6',
      title: 'Career Growth Opportunities',
      description: 'Develop skills that can help with internships, jobs, freelancing, and higher education.',
      icon: TrendingUp,
      color: 'text-[#06b6d4] bg-[#06b6d4]/10 border-[#06b6d4]/20',
    },
    {
      id: 'benefit-7',
      title: 'Affordable Learning',
      description: 'Quality education and practical training at student-friendly fees.',
      icon: HeartHandshake,
      color: 'text-[#f43f5e] bg-[#f43f5e]/10 border-[#f43f5e]/20',
    },
    {
      id: 'benefit-8',
      title: 'Supportive Learning Environment',
      description: 'Learn in a friendly and encouraging environment designed for student success.',
      icon: Smile,
      color: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-12 w-full font-sans text-on-background"
    >
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-transparent to-transparent py-16 sm:py-20 border-b border-outline-variant/30 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary font-bold text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-bounce" /> Student Empowerment
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
            Why Choose B&apos;s Nexora Edutech?
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed font-sans mt-2">
            We are committed to providing practical, career-oriented training that helps students develop valuable skills and achieve professional success.
          </p>
        </div>
      </div>

      {/* Grid of Student Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefitsList.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative flex flex-col justify-between bg-white border border-outline-variant/70 rounded-2xl p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Subtle lower highlight accent bar on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl" />
                  
                  <div className="space-y-5 text-left">
                    {/* Visual icon badge */}
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all group-hover:scale-110 duration-300 ${benefit.color}`}>
                      <IconComponent className="w-7 h-7 stroke-[2]" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold font-sans text-on-background group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-on-surface-variant font-medium font-sans leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Prompt / Prominent footer call-to-action button */}
          <div className="text-center pt-8">
            <button
              onClick={onContactClickFromBtn}
              className="inline-flex items-center gap-2.5 px-10 py-4.5 bg-primary text-white hover:bg-primary-container font-extrabold text-base rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-98 transition-all cursor-pointer group"
            >
              Get in Touch with an Advisor
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Contact Section */}
      <section id="contact-benefits" className="py-20 sm:py-24 bg-surface-container border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left coordinate column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">Reach our advisors</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Admissions Desk
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant font-medium leading-relaxed font-sans">
                Speak directly with B&apos;s Nexora Edutech admissions help desk regarding certification timelines, flexible slot schedules, and online support materials.
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
                      key="benefits-contact-form"
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
                          placeholder="Tell us about your learning objectives and questions..."
                          rows={4}
                          className={`w-full rounded-xl border px-4 py-3 bg-white text-sm transition-all font-sans ${
                            errors.message ? 'border-red-500 focus:ring-3 focus:ring-red-100' : 'border-outline-variant focus:border-primary focus:ring-3 focus:ring-primary/10'
                          }`}
                        />
                        {errors.message && <p className="text-[10px] text-red-500 font-medium">{errors.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <button
                        id="benefits-contact-submit-btn"
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
                      key="success-prompt-benefits"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold font-sans text-on-background">Inquiry Posted Successfully!</h4>
                        <p className="text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                          An academic counselor from B&apos;s Nexora Edutech will make contact with you at 8073254135 or bsnexoraedutech@gmail.com very soon.
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
    </motion.div>
  );
}
