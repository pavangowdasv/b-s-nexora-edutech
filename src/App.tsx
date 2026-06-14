import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ethos from './components/Ethos';
import Courses from './components/Courses';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoursesPage from './components/CoursesPage';
import BenefitsPage from './components/BenefitsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'courses' | 'benefits' | 'contact'>('home');
  const [prefilledCourseMessage, setPrefilledCourseMessage] = useState<string>('');

  const handleNavigate = (page: 'home' | 'courses' | 'benefits' | 'contact', sectionId?: string) => {
    setCurrentPage(page);
    setPrefilledCourseMessage('');
    window.scrollTo({ top: 0 });
    
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const goToContact = (courseTitle?: string) => {
    if (courseTitle && typeof courseTitle === 'string') {
      setPrefilledCourseMessage(courseTitle);
    } else {
      setPrefilledCourseMessage('');
    }
    setCurrentPage('contact');
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navigation TopAppBar */}
      <Header 
        onContactClick={() => goToContact()} 
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Pages */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <div className="space-y-0">
            {/* Hero Section */}
            <Hero onContactClick={() => goToContact()} onExploreClick={() => handleNavigate('courses')} />

            {/* Ethos / Vision Pillars */}
            <Ethos />

            {/* Featured Learning Areas */}
            <Courses onContactClick={() => goToContact()} onExploreClick={() => handleNavigate('courses')} />

            {/* FAQs */}
            <FAQ />
          </div>
        ) : currentPage === 'courses' ? (
          /* Dedicated Courses Page with standalone redirect */
          <CoursesPage onContactClickFromCard={(courseTitle) => goToContact(courseTitle)} />
        ) : currentPage === 'benefits' ? (
          /* Dedicated Student Benefits Page with redirect */
          <BenefitsPage onContactClickFromBtn={() => goToContact()} />
        ) : (
          /* Dedicated Admissions / Contact Page */
          <ContactPage prefilledCourseMessage={prefilledCourseMessage} />
        )}
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
