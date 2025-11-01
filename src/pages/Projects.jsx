import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';
import { Code, ChevronLeft, ExternalLink } from 'lucide-react';

export default function Projects() {
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

  const projects = [
    {
      title: 'Avendro - Lending Management System',
      description: 'A comprehensive system to manage lending operations, from client onboarding to payment tracking.',
      tags: ['Python Django', 'PostgreSQL', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Sentinels - Gamified Cybersecurity Education',
      description: 'An interactive mobile application that teaches cybersecurity concepts through engaging games and quizzes.',
      tags: ['C#', 'Firebase', 'Unity Engine', 'Python', 'Django'],
      link: '#'
    },
    {
      title: 'Marketplace - E-commerce Platform',
      description: 'A full-featured e-commerce website with product listings, user accounts, and a secure checkout process.',
      tags: ['Python', 'Django', 'React', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Construction Inventory Management System',
      description: 'A comprehensive system for managing construction inventory, including tracking materials, equipment, and supplies.',
      tags: ['Python', 'Django', 'React', 'Tailwind CSS', 'PostgreSQL'],
      link: '#'
    },
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
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 text-gray-900 dark:text-white font-medium"
        >
          <ChevronLeft size={18} />
          Back
        </button>
        {/* Projects Card */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
              <Code size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          </div>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`p-4 bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 group hover:scale-[1.02] hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h2>
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-all duration-300 hover:scale-110"
                      aria-label="Project Link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}