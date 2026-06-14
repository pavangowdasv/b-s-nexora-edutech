import { Cpu, Laptop, Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const benefitCards = [
    {
      title: 'Industry-Relevant Skills',
      description: 'Learn the latest technologies and practical skills that are highly valued in today\'s job market.',
      icon: Cpu,
    },
    {
      title: 'Hands-On Training',
      description: 'Gain real-world experience through practical exercises, projects, and interactive learning.',
      icon: Laptop,
    },
    {
      title: 'Expert Guidance',
      description: 'Learn from experienced trainers who provide support and mentorship throughout your journey.',
      icon: Users,
    },
    {
      title: 'Certification',
      description: 'Receive a course completion certificate to enhance your resume and professional profile.',
      icon: Award,
    },
    {
      title: 'Study Materials Included',
      description: 'Get access to learning resources, notes, and reference materials for better understanding.',
      icon: BookOpen,
    },
    {
      title: 'Career Growth',
      description: 'Build the confidence and skills needed for internships, employment, freelancing, and higher education.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-surface-container border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title area */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Core Advantage</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-background">
            Student Benefits
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-sans">
            Discover how our practical, career-focused training helps students build valuable skills and achieve their goals.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5 cursor-default group relative overflow-hidden"
              >
                {/* Visual hover background accent highlight */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                
                {/* Icon wrapper with smooth bounce and styling */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white duration-300">
                  <Icon className="w-8 h-8 stroke-[1.75]" />
                </div>
                
                <div className="space-y-2.5 text-center">
                  <h4 className="text-base sm:text-lg font-bold text-on-background group-hover:text-primary transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

