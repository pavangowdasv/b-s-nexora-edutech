import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onContactClick: () => void;
  currentPage: 'home' | 'courses' | 'benefits' | 'contact';
  onNavigate: (page: 'home' | 'courses' | 'benefits' | 'contact', sectionId?: string) => void;
}

export default function Header({ onContactClick, currentPage, onNavigate }: HeaderProps) {
  const [scrollActive, setScrollActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);

      if (currentPage === 'home') {
        // Detect active section on scroll
        const sections = ['home', 'about', 'contact'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140 && rect.bottom >= 145) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'Student Benefits', id: 'benefits' },
  ];

  const handleItemClick = (e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    if (itemId === 'courses') {
      onNavigate('courses');
    } else if (itemId === 'benefits') {
      onNavigate('benefits');
    } else if (itemId === 'contact') {
      onContactClick();
    } else {
      onNavigate('home');
    }
    setMobileMenuOpen(false);
  };

  const isItemActive = (itemId: string) => {
    if (currentPage === 'home') {
      if (itemId === 'home') return activeSection === 'home' || activeSection === 'about';
      if (itemId === 'contact') return activeSection === 'contact';
      return false;
    }
    return currentPage === itemId;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrollActive ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleItemClick(e, 'home')}
          className="flex items-center gap-0 group shrink-0"
        >
          <img
            src="/logo.png"
            alt="B's Nexora Edutech Logo"
            className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          />
          <img
            src="/brand-name.png"
            alt="B's Nexora Edutech"
            className="h-28 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
          />
        </a>

        {/* Central Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/60 p-1.5 rounded-full border border-outline-variant/30 shadow-sm">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleItemClick(e, item.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                isItemActive(item.id)
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-primary hover:bg-white/80'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="header-contact-btn"
            onClick={onContactClick}
            className="px-8 py-3.5 bg-primary text-white hover:bg-primary-container text-sm font-bold rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            id="hamburger-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-outline-variant hover:bg-slate-50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-outline-variant"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleItemClick(e, item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl font-semibold text-sm ${
                    isItemActive(item.id)
                      ? 'bg-primary/10 text-primary'
                      : 'text-on-surface-variant hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    onContactClick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
