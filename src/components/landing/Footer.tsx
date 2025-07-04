
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-10">
      <div className="container mx-auto">
        <p className="text-foreground/60">
          A project by{' '}
          <a
            href="https://www.linkedin.com/in/rxhman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground hover:text-brand-gold transition-colors"
          >
            Rahman Mohammad Ali
          </a>
        </p>
        <p className="text-sm text-foreground/50 mt-2">
          The Universal Ethics Engine. Aligning AI with human morality across borders, ideologies, and time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
