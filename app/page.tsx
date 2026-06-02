'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function DailyStrideLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const playStoreLink = "https://play.google.com/store/apps/details?id=com.molokochris.dailystride";
  const appStoreLink = "https://apps.apple.com/app/daily-stride/id6761611221";

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">DS</div>
            <span className="font-semibold text-2xl tracking-tight">DailyStride</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#how" className="hover:text-emerald-600 transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-emerald-600 transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center gap-4">
            <a href={appStoreLink} target="_blank" className="hidden md:block px-6 py-2.5 text-sm font-semibold rounded-2xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">iOS</a>
            <a href={playStoreLink} target="_blank" className="hidden md:block px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-2xl transition-all">Android</a>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-6">
            <div className="flex flex-col gap-4 text-lg">
              <a href="#features" className="py-2">Features</a>
              <a href="#how" className="py-2">How it Works</a>
              <a href="#testimonials" className="py-2">Testimonials</a>
              <a href={appStoreLink} target="_blank" className="py-3 text-center border border-zinc-300 dark:border-zinc-700 rounded-2xl">Download on iOS</a>
              <a href={playStoreLink} target="_blank" className="py-3 text-center bg-emerald-600 text-white rounded-2xl">Get on Android</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero + all other sections are in the previous message I sent. Paste the full page.tsx from before here */}
    </div>
  );
}