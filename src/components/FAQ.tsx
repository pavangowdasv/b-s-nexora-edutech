import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Do I need prior experience?',
      answer: 'No! We offer foundational modules designed specifically for absolute beginners to scaffold their concepts step-by-step from zero to industry competency.',
    },
    {
      id: 'faq-2',
      question: 'Is mentorship included?',
      answer: 'Yes, all our premium tracks include 1-on-1 scheduled mentorship syncs with leading tech professionals to help you navigate code blockers and career tactics.',
    },
    {
      id: 'faq-3',
      question: 'Can I get a refund?',
      answer: 'Of course. We offer an unconditional 14-day refund guarantee if the course scope, curriculum pace, or workspace tools do not meet your exact expectations.',
    },
  ];

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-primary mx-auto opacity-80" />
          <h2 className="text-3xl font-bold tracking-tight text-on-background">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
            Quick responses to common questions from aspiring learners.
          </p>
        </div>

        {/* FAQs list accordion container */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white border border-outline-variant/50 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-primary/40"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-6 focus:outline-none select-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-on-background group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-primary'} transition-colors shrink-0`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-on-surface-variant font-sans leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
