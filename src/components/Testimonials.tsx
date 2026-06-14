import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  photo: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Alex Smith',
      role: 'Data Analyst at TechCorp',
      company: 'TechCorp',
      quote: '"B\'s Nexora Edutech transformed my career. The mentorship was invaluable, and the community pushed me to be my best."',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
    },
    {
      id: 'test-2',
      name: 'Jane Miller',
      role: 'Lead UI Designer',
      company: 'Freelance Studio',
      quote: '"The UI course was practical and fast-paced. I built a portfolio that actually got me hired within weeks."',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop',
    },
    {
      id: 'test-3',
      name: 'Ryan Lee',
      role: 'Software Engineer',
      company: 'Quantum Systems',
      quote: '"Best investment I\'ve ever made. The curriculum is always up-to-date with current industry standards."',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-on-background">
            Student Stories
          </h2>
          <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        {/* List of Student Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 md:p-8 bg-surface border border-outline-variant/55 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 text-left relative group"
            >
              <MessageSquare className="w-8 h-8 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />

              <div className="space-y-4">
                {/* Visual Stars */}
                <div className="flex gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="font-body-md italic text-on-surface-variant font-sans leading-relaxed">
                  {story.quote}
                </p>
              </div>

              {/* Student Identification */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border border-outline-variant"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="font-bold text-sm text-on-background">{story.name}</p>
                  <p className="text-xs text-on-surface-variant font-medium font-sans">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
