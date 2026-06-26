import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';
import { User, ChevronLeft, Image as ImageIcon } from 'lucide-react';

export default function About() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Trigger animation after preloader
      setTimeout(() => setIsVisible(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const storyBlocks = [
    {
      id: 1,
      text: "I'm Jeremiah Pantaras, a 24-year-old Computer Science graduate (Batch 2026) based in Bacolod City, Philippines.",
      image: "/about-img/1.webp"
    },
    {
      id: 2,
      text: "My journey in building and developing applications began during my first year of college. I quickly realized that writing code isn't just about understanding syntax—it's about solving real-world problems, optimizing workflows, and creating digital experiences that make a tangible difference in people's lives.",
      image: "/about-img/2.webp"
    },
    {
      id: 3,
      text: "In 2023, I took a deep dive into backend development with Python and Django. I was still figuring things out, but that intensive learning phase set the stage for rapid growth. By 2024, I landed my first client as a freelance software developer. Taking a project from concept to deployment and delivering systems that went beyond my client's expectations was a major turning point for me.",
      image: "/about-img/3.webp"
    },
    {
      id: 4,
      text: "As my freelance work expanded in 2025, I decided to scale my efforts and founded COSDevs (City of Smiles Developers). I wanted to create a dedicated hub for delivering high-quality, scalable web applications, turning complex client requirements into seamless digital solutions.",
      image: "/about-img/4.webp"
    },
    {
      id: 5,
      text: "Beyond the code, I bring a strong visual and multimedia perspective to my tech projects. During my time at Mediabox Network, I worked dynamically as both a Creative—handling video editing, videography, and photography—and a Full-Stack Web Developer. One of my proudest achievements there was engineering \"Asikaso,\" a collaborative task and schedule management system built entirely from scratch to streamline their daily operations.",
      image: "/about-img/5.webp"
    },
    {
      id: 6,
      text: "Ever since I started my Computer Science journey, this field has only become more fascinating. I've explored, learned, and grown—evolving from a curious student into a versatile professional who bridges the gap between robust engineering and engaging user design. Whether I'm architecting a complex database, designing an intuitive interface, or producing multimedia content, I am always looking for the next challenge to build something meaningful.",
      image: "/about-img/6.webp"
    }
  ];

  if (loading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 py-12">
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 text-gray-900 dark:text-white font-medium cursor-pointer shadow-sm"
        >
          <ChevronLeft size={18} />
          Back to Home
        </button>

        {/* Header Section */}
        <div className="bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center mb-4 text-center">
            <div className="p-2 sm:p-3 bg-slate-100 dark:bg-[#2a2a2a]">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">About My Journey</h1>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 mx-auto rounded-full"></div>
        </div>

        {/* Story Flow */}
        <div className="space-y-16 pb-16">
          {storyBlocks.map((block, idx) => {
            const isEven = idx % 2 === 1; // 0-indexed, so 1, 3, 5 are even
            
            return (
              <div 
                key={block.id} 
                className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-700 hover:translate-y-[-4px] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Text Content */}
                <div className={`flex-1 w-full order-2 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}>
                  <div className={`bg-white dark:bg-[#1a1a1a] p-6 sm:p-8 shadow-md dark:shadow-xl border border-gray-100 dark:border-gray-800 relative ${
                    isEven ? 'border-r-4 border-r-slate-400' : 'border-l-4 border-l-slate-400'
                  }`}>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {block.text}
                    </p>
                  </div>
                </div>

                {/* Image Component */}
                <div className={`flex-1 w-full order-1 flex justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-full max-w-lg bg-gray-100 dark:bg-[#1a1a1a] overflow-hidden shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-800 relative group transition-all duration-500 hover:shadow-2xl flex items-center justify-center p-1 sm:p-2 rounded-sm">
                    
                    <img 
                      src={block.image} 
                      alt={`Story image ${block.id}`}
                      className="w-full h-auto max-h-[400px] sm:max-h-[550px] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* Gradient Overlay for style */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/10 to-transparent dark:from-black/30 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}