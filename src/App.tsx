import { useState, useEffect } from 'react'
import './App.css'
import Home from "./Home";
import Preloader from './components/Preloader';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    // Show preloader for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Add a small delay before showing content to ensure smooth transition
      setTimeout(() => setContentReady(true), 100);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Static background layer - always present */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-[#131313]/50 to-[#131313] pointer-events-none"></div>
      </div>

      {/* Dynamic content layers */}
      {loading && <Preloader />}
      <div className={loading ? 'hidden' : 'relative z-10'}>
        {contentReady && <Home />}
      </div>
    </>
  );
}

export default App;
