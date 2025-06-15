
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-10 bg-brand-cream">
      <div className="container mx-auto">
        <p className="text-brand-green/70">
          A project by{' '}
          <a
            href="https://www.linkedin.com/in/rxhman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-green hover:text-brand-gold transition-colors"
          >
            Rahman Mohammad Ali
          </a>
        </p>
        <p className="text-sm text-brand-green/50 mt-2">
          The Universal Ethics Engine. Aligning AI with human morality across borders, ideologies, and time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
