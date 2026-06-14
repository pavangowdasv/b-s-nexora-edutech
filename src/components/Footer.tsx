import { useState } from 'react';
import FooterModal, { type ModalType } from './FooterModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const footerLinks: { label: string; modal: ModalType }[] = [
    { label: 'Privacy Policy', modal: 'privacy' },
    { label: 'Terms of Service', modal: 'terms' },
    { label: 'Admissions Support', modal: 'admissions' },
    { label: 'Information', modal: 'information' },
  ];

  return (
    <>
      <footer className="bg-surface-container-low border-t border-outline-variant/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex flex-col md:flex-row justify-between items-center gap-8 font-sans">
          
          {/* Brand logo in footer */}
          <div className="flex items-center gap-1">
            <img
              src="/logo.png"
              alt="B's Nexora Edutech Logo"
              className="w-12 h-12 object-contain"
            />
            <img
              src="/brand-name.png"
              alt="B's Nexora Edutech"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Footer anchor links — each opens its modal */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-on-surface-variant">
            {footerLinks.map(({ label, modal }) => (
              <button
                key={label}
                onClick={() => setActiveModal(modal)}
                className="hover:text-primary transition-colors cursor-pointer underline-offset-2 hover:underline"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Copyright badge */}
          <p className="text-xs text-on-surface-variant font-medium">
            © {currentYear} B's Nexora Edutech. All rights reserved.
          </p>

        </div>
      </footer>

      {/* Popup Modals */}
      <FooterModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
