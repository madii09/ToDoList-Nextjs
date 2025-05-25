'use client';

import { useEffect, useState, ReactNode } from 'react';

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
        className='fixed top-4 right-4 z-50 px-4 py-2 rounded bg-gray-800 text-white cursor-pointer hover:bg-gray-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-500'
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {children}
    </>
  );
}
