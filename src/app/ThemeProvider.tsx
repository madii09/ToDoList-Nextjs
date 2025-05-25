'use client';

import { useEffect, useState, ReactNode } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleTheme}
        aria-label='Toggle theme'
        className='fixed top-4 right-4 z-50 p-2 rounded cursor-pointer'
      >
        {isDarkMode ? (
          <SunIcon className='w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors' />
        ) : (
          <MoonIcon className='w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors' />
        )}
      </button>
      {children}
    </>
  );
}
