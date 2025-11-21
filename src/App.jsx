import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TechStacks from './pages/TechStacks';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Workshop from './pages/Workshop';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, []);

  // Pass darkMode and setDarkMode as props if you want to toggle from any page
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stacks" element={<TechStacks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/workshops" element={<Workshop />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;