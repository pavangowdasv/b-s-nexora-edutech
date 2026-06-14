import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Search, ChevronDown, X, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { submitApplicant } from '../lib/firebase';

const INDIAN_STATES_AND_UTS = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
  'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
  'Lakshadweep', 'Puducherry'
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    mobileNumber: '',
    gmailAddress: '',
    state: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Searchable Dropdown state
  const [stateSearch, setStateSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

    if (!form.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required';
    } else if (form.fullName.trim().length < 2) {
      tempErrors.fullName = 'Please enter a valid full name';
    }

    const cleanedPhone = form.mobileNumber.replace(/\s+/g, '').replace('+', '');
    const phoneRegex = /^(?:91)?[6789]\d{9}$/; 
    if (!form.mobileNumber.trim()) {
      tempErrors.mobileNumber = 'Mobile Number is required';
    } else if (!phoneRegex.test(cleanedPhone)) {
      tempErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number';
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    if (!form.gmailAddress.trim()) {
      tempErrors.gmailAddress = 'Gmail Address is required';
    } else if (!gmailRegex.test(form.gmailAddress.trim())) {
      tempErrors.gmailAddress = 'Please enter a valid Gmail address (ending in @gmail.com)';
    }

    if (!form.state) {
      tempErrors.state = 'Selecting your State is required';
    } else if (!INDIAN_STATES_AND_UTS.includes(form.state)) {
      tempErrors.state = 'Please choose a valid State';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitApplicant({
        full_name: form.fullName.trim(),
        mobile_number: form.mobileNumber.trim(),
        gmail_address: form.gmailAddress.trim(),
        state: form.state,
      });
      setSubmitted(true);
      setForm({ fullName: '', mobileNumber: '', gmailAddress: '', state: '' });
      setStateSearch('');
    } catch (err: any) {
      setSubmitError(
        err?.message || 'Something went wrong. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredStates = INDIAN_STATES_AND_UTS.filter(item => 
    item.toLowerCase().includes(stateSearch.toLowerCase())
  );

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header content */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Quick Enquiry</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Admissions Inquiry Form
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Fill out your details below. All fields are displayed vertically in a card-style container for safe, fast validation.
          </p>
        </div>

        {/* Centered Compact Card Container */}
        <div className="max-w-xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 shadow-xl shadow-slate-200/30 text-left"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
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

                  {/* Field 4: State */}
                  <div className="space-y-1.5 relative" ref={dropdownRef}>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">State <span className="text-red-500">*</span></label>
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
                          className="absolute z-30 left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-lg py-1 text-sm font-normal text-slate-800"
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

                  {/* Supabase Submit Error Banner */}
                  {submitError && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Inquiry Button */}
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
        </div>

      </div>
    </section>
  );
}
