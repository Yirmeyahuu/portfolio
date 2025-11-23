import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';
import { Briefcase, ChevronLeft } from 'lucide-react';

export default function Experience() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      role: 'Project Manager / Lead Web Developer',
      company: 'Computer Science Thesis',
      year: '2024',
      current: true
    },
    {
      role: 'Freelance Full-Stack Developer',
      company: 'Bacolod City, Philippines',
      year: '2024',
      current: true
    },
    {
      role: 'Software Engineering Lead',
      company: 'COS Devs',
      year: '2025',
      current: true
    },
    {
      role: 'Intern - Web Developer',
      company: 'Local Startup',
      year: '2023',
      current: false
    },
    {
      role: 'Student Assistant - IT',
      company: 'STIWNU-CICT',
      year: '2022',
      current: false
    }
  ];

  if (loading) return <Preloader />;

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
        {/* Experience Card */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
              <Briefcase size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h1>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative pl-6 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0 transition-all duration-500 hover:translate-x-2 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.current 
                    ? 'bg-blue-500 border-blue-500 animate-pulse' 
                    : 'bg-gray-300 dark:bg-gray-600 border-gray-300 dark:border-gray-600'
                }`} />
                <div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded transition-all duration-300 hover:scale-105">
                      {exp.year}
                    </span>
                    {exp.current && (
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded font-medium transition-all duration-300 hover:scale-105 animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}