import { ArrowUpRight, Award, Flame, Star, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onContactClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-white to-background pt-24 sm:pt-28 pb-16">
      {/* Absolute Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/12 w-[450px] h-[450px] bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Visual and textual hierarchy */}
        <div className="lg:col-span-12 xl:col-span-7 text-center lg:text-left space-y-8">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/10 border border-primary/25 rounded-full text-primary font-bold text-xs tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span>Govt. Recognized Certification Hub</span>
          </motion.div>

          {/* Title Hero */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4 p-0 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[50px] leading-[1.1] font-black text-on-background tracking-tight"
            >
              Learn Future-Ready Skills with <br className="hidden sm:inline" />
              <span className="text-primary">
                Industry-Focused
              </span>{' '}
              Certification Programs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal"
            >
              Master programming, web development, office automation, cybersecurity, and other in-demand technical skills through practical online training and government-recognized certification programs.
            </motion.p>
          </div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              id="hero-cta-contact-us"
              onClick={onContactClick}
              className="px-10 py-4 bg-primary text-white hover:bg-primary-container font-extrabold rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer group text-sm duration-350"
            >
              Contact Us <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              id="hero-cta-explore-courses"
              onClick={onExploreClick}
              className="px-10 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold rounded-full transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer text-sm duration-300 border border-slate-200"
            >
              Explore Courses
            </button>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['https://lh3.googleusercontent.com/a/default-user', 'https://lh3.googleusercontent.com/a/default-user', 'https://lh3.googleusercontent.com/a/default-user'].map((url, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border border-white bg-slate-200 flex items-center justify-center font-bold text-[10px] text-primary">
                    {['JD', 'AL', 'SM'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500 fill-yellow-500 w-3.5 h-3.5 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <p className="text-[11px] font-semibold text-on-surface-variant font-sans"><strong className="text-on-background font-bold">15,000+</strong> active learners</p>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2 text-on-surface-variant">
              <Flame className="w-5 h-5 text-secondary animate-bounce" />
              <div>
                <p className="text-xs font-bold text-on-background">95% Success Rate</p>
                <p className="text-[10px]">Within 6 months</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Holographic 3D Composition Render with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="absolute -inset-4 bg-primary/15 blur-[64px] rounded-full -z-10 animate-pulse-slow" />
          
          <div className="relative group">
            {/* Visual Frame outline detail */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary to-secondary opacity-25 blur-sm group-hover:opacity-45 transition-opacity" />
            
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCieIBl2qxYCDqm64GDtzdYeRstW-usO3Uha2GCpfMc3an1-ihb9yw5bF28vhphwHhMl0EH2gtOz_W7ZHX7igA56Qc1c6alXmsmFog5oRfYFjmC6yLwa1zJAVkfF8ZlLbXDMfoQH35x-p5wvNA7sexoOhmftfd8Mj7jIdplOV3sYo-yvbGMoogH9o2aIp7k0fpSQ9PKuBGzY7oC6M7MRWdWraAtptbHzbgj4KyA5eaFEDA6q1XR8pzbsmyrwIBTl6mA8TR19mIXxC0K"
              alt="Interactive Learning Experience"
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl scale-100 hover:scale-[1.01] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Float badges for high realism */}
            <div className="absolute z-20 top-8 -left-8 bg-white/90 backdrop-blur border border-outline-variant/60 rounded-xl p-3.5 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <span className="text-[10px] text-on-surface-variant block font-medium">Certification</span>
                <p className="text-xs font-bold text-on-background">Validated Track</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-on-surface-variant font-medium text-xs">
        <span className="animate-pulse">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
