'use client';

import { useState, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ContactDialog } from './ContactDialog';

export function Shell({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContact={() => setContactOpen(true)} />
      <main className="relative">{children}</main>
      <Footer onContact={() => setContactOpen(true)} />
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
