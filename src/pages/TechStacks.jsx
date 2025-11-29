import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ChevronLeft } from 'lucide-react';
import SkeletonLoader from '../components/SkeletonLoader';

export default function TechStacks() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const techStack = {
    frontend: [
      'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Sass', 'Redux', 'Vite'
    ],
    backend: [
      'Node.js', 'Python', 'Django', 'Express.js', 'REST API', 'GraphQL'
    ],
    database: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'SQLite'
    ],
    tools: [
      'Git', 'Bitbucket', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Render', 'Postman', 'Jira', 'Trello', 'Notion'
    ],
    uiux: [
      'Figma', 'Adobe XD'
    ],
    multimedia: [
      'Adobe Premiere', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Davinci Resolve', 'Pixelmator Pro', 'Canva'
    ]
  };

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

        {/* Tech Stack Card */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
              <Code size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tech Stack Station</h1>
          </div>
          <div className="space-y-8">
            {Object.entries(techStack).map(([category, techs], idx) => (
              <div 
                key={category}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h2 className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-3 capitalize">
                  {category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1.5 bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {tech}
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