import React, { useEffect, useState } from 'react';
import { Camera, Video, Image, Film, PenTool, ChevronDown } from 'lucide-react';
import creativeData from '../data/creative-context.json';
import heroBackground from '../../assets/images/hero-background.webp';

const iconMap = {
  Camera: Camera,
  Video: Video,
  Image: Image,
  Film: Film,
  PenTool: PenTool,
  Clapperboard: Film // Fallback to Film if Clapperboard is not imported or needed to be different
};

export default function CreativeHero() {
  const [isVisible, setIsVisible] = useState(false);
  const { portfolio } = creativeData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center overflow-hidden selection:bg-slate-800 selection:text-white">
      {/* Background Image Layer */}
      <img 
        src={heroBackground} 
        alt="Jeremiah Pantaras - Creative" 
        className="absolute inset-0 w-full h-full object-cover object-[center_25%] z-0 animate-slow-zoom"
      />

      {/* Cinematic Vignette & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black/50"></div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,_transparent_30%,_rgba(0,0,0,0.85)_80%,_#0a0a0a_100%)] shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4">
            Jeremiah Pantaras
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter">
            THE CREATIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
              SIDE
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl font-light leading-relaxed border-l-2 border-gray-700 pl-6">
            A space where imagination meets visual storytelling. I specialize in crafting meaningful experiences through photography, cinematic films, visual design, and creative editing—capturing authentic moments and transforming ideas into compelling pieces of art. Every frame, composition, and detail is intentionally created to evoke emotion, tell stories, and bring visions to life in ways that are both memorable and impactful.
          </p>

          <div className="mt-12 flex gap-4">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Explore Work
            </button>
            <a href="/" className="px-8 py-4 bg-transparent border border-gray-700 text-white font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
              Back to Developer
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
