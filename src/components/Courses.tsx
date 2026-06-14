import React from 'react';
import { 
  Globe, 
  Terminal, 
  FileSpreadsheet, 
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

interface CoursesProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export default function Courses({ onContactClick, onExploreClick }: CoursesProps) {
  const featuredCourses = [
    {
      id: 'course-web-featured',
      title: 'Web Designing',
      domain: 'Design & Frontend',
      description: 'Learn how to create modern, responsive, and visually appealing websites using industry-standard technologies.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      icon: Globe,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      duration: '3 Months',
      badge: 'Popular'
    },
    {
      id: 'course-python-featured',
      title: 'Python Programming',
      domain: 'Core Programming',
      description: 'Build a strong foundation in programming, automation, and problem-solving using Python.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop',
      icon: Terminal,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
      duration: '1.5 - 2.5 Months',
      badge: 'Bestseller'
    },
    {
      id: 'course-office-featured',
      title: 'Office Automation',
      domain: 'Business Productivity',
      description: 'Master business applications, document creation, data analysis spreadsheets, and presentation tools for professional efficiency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      icon: FileSpreadsheet,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      duration: '2 Months',
      badge: 'Essentials'
    }
  ];

  return (
    <section id="learning-areas" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/25 rounded-full text-primary font-bold text-xs tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span>Top Training Programs</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What You'll Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Explore a few of our most popular training programs designed to build practical skills and enhance career opportunities.
          </p>
        </div>

        {/* 3 Featured Courses Horizontal layout on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredCourses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col justify-between bg-white border border-slate-200/65 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <div>
                  {/* Aspect Ratio Controlled Image with Badge */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 bg-primary text-white font-extrabold text-[10px] uppercase tracking-wider py-1 px-2.5 rounded-full shadow-sm">
                      {course.badge}
                    </span>
                  </div>

                  {/* Card Content wrapper */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-md">
                        {course.domain}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {course.description}
                      </p>
                    </div>

                    {/* Metadata indicators */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>Interactive Lab</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 sm:px-7 pb-6 pt-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <button
                    onClick={onExploreClick}
                    className="text-xs font-bold text-primary hover:text-primary-container flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={onContactClick}
                    className="text-xs font-bold text-slate-500 hover:text-primary transition-colors cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Home Page Goal Oriented CTA Block */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 sm:p-10 text-center max-w-4xl mx-auto space-y-4 mt-8">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">Looking for our complete list of educational courses?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            We provide structured, student-friendly curricula covering cybersecurity, Kannada typing, web development, basic coding, and digital automation tools.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onExploreClick}
              className="px-6 py-2.5 bg-primary text-white hover:bg-primary-container font-extrabold text-xs rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
            >
              Browse All Courses <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onContactClick}
              className="px-6 py-2.5 bg-transparent border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 font-extrabold text-xs rounded-full transition-all cursor-pointer"
            >
              Consult an Advisor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
