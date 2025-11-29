import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';
import { User, Sparkles, Heart, Code, BookOpen, ChevronLeft } from 'lucide-react';

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

  const facts = [
    {
      icon: <Sparkles size={20} className="text-sky-500" />,
      title: "Passionate Learner",
      desc: "Always exploring new tech, especially AI and full-stack development."
    },
    {
      icon: <Code size={20} className="text-sky-500" />,
      title: "Builder & Creator",
      desc: "I love building web apps, mobile apps, and digital solutions for real-world problems."
    },
    {
      icon: <BookOpen size={20} className="text-sky-500" />,
      title: "Community Advocate",
      desc: "Founder of COS Devs, helping startups and mentoring fellow developers in Negros Island."
    },
    {
      icon: <Heart size={20} className="text-sky-500" />,
      title: "Creative Mind",
      desc: "Skilled in UI/UX, video editing, and graphics design using Figma, Adobe Suite, and more."
    }
  ];

  if (loading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 py-12">
      <div className={`max-w-3xl mx-auto px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 text-gray-900 dark:text-white font-medium cursor-pointer"
        >
          <ChevronLeft size={18} />
          Back
        </button>
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
              <User size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h1>
          </div>
          <div className="mb-8">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I'm <span className="font-bold text-sky-600 dark:text-sky-400">Jeremiah Pantaras</span> — a Junior Software Engineer and Full-Stack Developer from Bacolod City, Philippines. I specialize in Python (Django) and React (Vite), and I'm passionate about building modern web and mobile applications, mentoring developers, and exploring the world of artificial intelligence.
            </p>
          </div>
          <div className="space-y-6">
            {facts.map((fact, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 transition-all duration-500 hover:translate-x-2 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center">
                  {fact.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{fact.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{fact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}