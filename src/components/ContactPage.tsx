import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  Search, 
  X,
  Loader2,
  Sparkles,
  HelpCircle,
  GraduationCap
} from 'lucide-react';

const INDIAN_STATES_AND_UTS = [
  // States
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  // UTs
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

interface ContactPageProps {
  prefilledCourseMessage?: string;
}

export default function ContactPage({ prefilledCourseMessage }: ContactPageProps) {
  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    gmailAddress: '',
    state: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Searchable Dropdown state
  const [stateSearch, setStateSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Pre-fill state inquiry if a course message context exists
  useEffect(() => {
    if (prefilledCourseMessage) {
      // We can append this to state/interest if applicable, or just keep it internally
    }
  }, [prefilledCourseMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const nextErrs = { ...prev };
        delete nextErrs[name];
        return nextErrs;
      });
    }
  };

  const handleSelectState = (stateName: string) => {
    setForm(prev => ({ ...prev, state: stateName }));
    setStateSearch(stateName);
    setDropdownOpen(false);
    if (errors.state) {
      setErrors(prev => {
        const nextErrs = { ...prev };
        delete nextErrs.state;
        return nextErrs;
      });
    }
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};

    // Full name validation
    if (!form.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required';
    } else if (form.fullName.trim().length < 2) {
      tempErrors.fullName = 'Please enter a valid full name';
    }

    // Mobile validation - checking Indian 10 digits, or standard numbers format
    const cleanedPhone = form.mobileNumber.replace(/\s+/g, '').replace('+', '');
    const phoneRegex = /^(?:91)?[6789]\d{9}$/; 
    if (!form.mobileNumber.trim()) {
      tempErrors.mobileNumber = 'Mobile Number is required';
    } else if (!phoneRegex.test(cleanedPhone)) {
      tempErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number';
    }

    // Gmail validation - checking for @gmail.com pattern
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    if (!form.gmailAddress.trim()) {
      tempErrors.gmailAddress = 'Gmail Address is required';
    } else if (!gmailRegex.test(form.gmailAddress.trim())) {
      tempErrors.gmailAddress = 'Please enter a valid Gmail address (ending in @gmail.com)';
    }

    // State selection validation
    if (!form.state) {
      tempErrors.state = 'Selecting your State is required';
    } else if (!INDIAN_STATES_AND_UTS.includes(form.state)) {
      tempErrors.state = 'Please choose a valid State from the list';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Mimic API post operation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({
        fullName: '',
        mobileNumber: '',
        gmailAddress: '',
        state: ''
      });
      setStateSearch('');
    }, 1200);
  };

  // Filter states list based on search term
  const filteredStates = INDIAN_STATES_AND_UTS.filter(item => 
    item.toLowerCase().includes(stateSearch.toLowerCase())
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-2xl mx-auto w-full space-y-8">
        {/* Page Titles Header Block */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-xs tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span>Admissions Portal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Get in Touch With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
          >
            Interested in our courses? Fill out the form below and our team will contact you shortly.
          </motion.p>
        </div>

        {/* Dynamic Centered Grid Column */}
        <div className="flex flex-col items-stretch space-y-6">
          
          {/* Centered Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 shadow-xl shadow-slate-200/40 text-left"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form key="contact-portal-form" onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Field 1: Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleInputChange}
                      placeholder=""
                      className={`w-full rounded-xl border px-4 py-3 bg-slate-50/50 text-slate-900 text-sm transition-all placeholder:text-slate-400 ${
                        errors.fullName ? 'border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Mobile Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={form.mobileNumber}
                      onChange={handleInputChange}
                      maxLength={15}
                      placeholder=""
                      className={`w-full rounded-xl border px-4 py-3 bg-slate-50/50 text-slate-900 text-sm transition-all placeholder:text-slate-400 ${
                        errors.mobileNumber ? 'border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10'
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.mobileNumber}
                      </p>
                    )}
                  </div>

                  {/* Field 3: Gmail Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Gmail Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="gmailAddress"
                      value={form.gmailAddress}
                      onChange={handleInputChange}
                      placeholder=""
                      className={`w-full rounded-xl border px-4 py-3 bg-slate-50/50 text-slate-900 text-sm transition-all placeholder:text-slate-400 ${
                        errors.gmailAddress ? 'border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10'
                      }`}
                    />
                    {errors.gmailAddress && (
                      <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.gmailAddress}
                      </p>
                    )}
                  </div>

                  {/* Field 4: State / Union Territory */}
                  <div className="space-y-1.5 relative" ref={dropdownRef}>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">State / Union Territory <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input
                        type="text"
                        value={stateSearch}
                        onChange={(e) => {
                          setStateSearch(e.target.value);
                          setDropdownOpen(true);
                          if (e.target.value === '') {
                            setForm(prev => ({ ...prev, state: '' }));
                          }
                        }}
                        onFocus={() => setDropdownOpen(true)}
                        placeholder=""
                        className={`w-full rounded-xl border pl-10 pr-10 py-3 bg-slate-50/50 text-slate-900 text-sm transition-all placeholder:text-slate-400 ${
                          errors.state ? 'border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100' : 'border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10'
                        }`}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Search className="w-4 h-4" />
                      </div>
                      
                      {stateSearch && (
                        <button
                          type="button"
                          onClick={() => {
                            setStateSearch('');
                            setForm(prev => ({ ...prev, state: '' }));
                          }}
                          className="absolute inset-y-0 right-8 px-2 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Dropdown Options List */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute z-30 left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl py-1 text-sm font-normal text-slate-800"
                        >
                          {filteredStates.length > 0 ? (
                            filteredStates.map((stateItem) => (
                              <button
                                key={stateItem}
                                type="button"
                                onClick={() => handleSelectState(stateItem)}
                                className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-between ${
                                  form.state === stateItem ? 'bg-primary/5 text-primary font-bold' : ''
                                }`}
                              >
                                <span>{stateItem}</span>
                                {form.state === stateItem && <CheckCircle2 className="w-4 h-4 text-primary" />}
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-xs text-slate-500 italic">No matching region found</div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {errors.state && (
                      <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                        <span>⚠️</span> {errors.state}
                      </p>
                    )}
                  </div>

                  {/* Pre-filled Message Highlight Alert */}
                  {prefilledCourseMessage && (
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-start gap-2.5">
                      <GraduationCap className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-[11px] sm:text-xs text-slate-500 italic font-medium">
                        Note: We will automatically attach your requested course interest of: &ldquo;{prefilledCourseMessage}&rdquo; to this enquiry.
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white hover:bg-primary-container font-extrabold text-sm py-4 rounded-full shadow-lg shadow-primary/15 hover:shadow-primary/25 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <Send className="w-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 px-2 flex flex-col items-center justify-center space-y-5 h-full"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    <CheckCircle2 className="w-11 h-11" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">Submission Completed!</h4>
                    <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for your interest! Our team will contact you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all rounded-full text-xs font-bold font-sans cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Minimal Direct Contacts Box below form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-4 text-sm text-slate-500 border-t border-slate-100 mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Phone Number:</span>
              <a href="tel:8073254135" className="text-primary hover:underline font-bold font-mono">8073254135</a>
            </div>
            <div className="hidden sm:block text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Email:</span>
              <a href="mailto:bsnexoraedutech@gmail.com" className="text-primary hover:underline font-bold">bsnexoraedutech@gmail.com</a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
