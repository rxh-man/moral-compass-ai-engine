
import React from 'react';
import { BookOpenCheck } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="text-brand-gold h-6 w-6" />
          <span className="font-serif text-xl text-foreground font-bold">UEE</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
