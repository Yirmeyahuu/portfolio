import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';
import { Award, ChevronLeft } from 'lucide-react';

export default function Certifications() {
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

  const certifications = [
    {
      title: 'ICT Olympics Web Design and Development Champion',
      issuer: 'STIWNU-CICT',
      year: '2022',
      badge: '🏆'
    },
    {
      title: 'ICT Olympics Web Design and Development 3rd Placer',
      issuer: 'STIWNU-CICT',
      year: '2023',
      badge: '🏆'
    },
    {
      title: 'Philippine Institute of Cyber Security Professionals Inc.',
      issuer: 'PICSPRO Inc.',
      year: '2023',
      badge: '🎖️'
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
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 text-gray-900 dark:text-white font-medium"
        >
          <ChevronLeft size={18} />
          Back
        </button>
        {/* Certifications Card */}
        <div className="bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] rounded-lg">
              <Award size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h1>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-4 bg-gray-50 dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl transition-transform duration-300 hover:scale-125">{cert.badge}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                    <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 rounded mt-2 inline-block transition-all duration-300 hover:scale-105">
                      {cert.year}
                    </span>
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