import React from 'react';
import { Award, ShieldCheck, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

export default function Ethos() {
  const credibilityCards = [
    {
      id: 'govt-cert',
      title: 'Government Recognized Certification',
      description: 'Receive certification from recognized programs that add value to your academic and professional profile.',
      icon: Award,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 'msme',
      title: 'MSME Registered Professional Guidance',
      description: 'Learn under experienced guidance associated with recognized professional and government-supported initiatives.',
      icon: ShieldCheck,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 'skill-dev',
      title: 'Practical Skill Development',
      description: 'Focus on industry-relevant skills including programming, web technologies, office automation, and computer applications.',
      icon: Laptop,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
  ];

  return (
    <div className="space-y-0">
      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              About B's Nexora Edutech
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              B's Nexora Edutech is an online learning platform dedicated to helping students and professionals gain practical technical skills through structured training programs. Our courses focus on real-world applications, hands-on learning, and career-oriented knowledge designed to prepare learners for future opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block">Quality Assurance</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Trusted Learning & Certification
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Delivering skill-focused curriculum designed to build professional capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {credibilityCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 hover:shadow-lg hover:scale-[1.01] transition-all flex flex-col items-center sm:items-start text-center sm:text-left space-y-4 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${card.color}`}>
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
