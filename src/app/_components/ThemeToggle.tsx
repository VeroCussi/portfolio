'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get theme from localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // Force a reflow to ensure CSS variables are updated
    document.documentElement.offsetHeight;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('Toggling theme to:', newTheme);
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply theme to document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('Added dark class to document');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class from document');
    }
    
    // Force a reflow to ensure CSS variables are updated
    document.documentElement.offsetHeight;
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-2xl border" 
           style={{
             backgroundColor: 'var(--paper)',
             borderColor: 'var(--grid)'
           }} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-2xl border hover:shadow-lg transition-all duration-300 flex items-center justify-center"
      style={{
        backgroundColor: 'var(--paper)',
        borderColor: 'var(--grid)',
        color: 'var(--ink)'
      }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" style={{ color: 'rgb(147, 51, 234)' }} />
      ) : (
        <Moon className="w-5 h-5" style={{ color: 'rgb(6, 182, 212)' }} />
      )}
    </button>
  );
}
