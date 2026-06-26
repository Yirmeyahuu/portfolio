import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../components/SkeletonLoader';
import { ChevronLeft, Image as ImageIcon } from 'lucide-react';
import ImageModal from '../components/ImageModal';

export default function Gallery() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 50);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const galleries = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    image: `/gallery/${i + 1}.webp`,
    title: `Highlight ${i + 1}`,
    date: '2024'
  }));

  if (loading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 py-12">
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 text-gray-900 dark:text-white font-medium cursor-pointer"
        >
          <ChevronLeft size={18} />
          Back
        </button>
        {/* Gallery Card */}
        <div className="bg-white dark:bg-[#1a1a1a] shadow-lg dark:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-[#2a2a2a] ">
              <ImageIcon size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Gallery</h1>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleries.map((item, idx) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2a2a2a] transition-all duration-500 hover:shadow-lg hover:-translate-y-1 break-inside-avoid cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${(idx % 10) * 100}ms` }}
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageModal 
        isOpen={!!selectedImage} 
        image={selectedImage?.image} 
        title={selectedImage?.title} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}
