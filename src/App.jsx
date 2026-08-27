import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

export default function App() {

  

  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference, default to dark for cinematic vibe
    const saved = localStorage.getItem('morni-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to dark for high-end cinematic experience
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('morni-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('morni-theme', 'light');
    }
  }, [darkMode]);

  return <Home darkMode={darkMode} setDarkMode={setDarkMode} />;
}

