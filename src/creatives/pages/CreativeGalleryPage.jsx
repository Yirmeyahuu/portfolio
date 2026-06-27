import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ImageModal from '../../components/ImageModal';

export default function CreativeGalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Add dark mode to body specifically for the creative module
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/creative-assets/creative-gallery/${i + 1}.webp`,
    title: `Creative Work ${i + 1}`
  }));

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-4 sm:px-6 lg:px-8 selection:bg-slate-800 selection:text-white">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/creative"
          className="mb-12 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Creative Home
        </Link>
        
        <div className="flex flex-col mb-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2 font-semibold">
            Complete Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl font-black">
            ALL WORKS
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden bg-gray-900 cursor-pointer break-inside-avoid border border-gray-800"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
                className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.parentElement.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-widest uppercase border border-white/30 px-6 py-2 backdrop-blur-sm">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal 
        isOpen={!!selectedImage}
        image={selectedImage?.src}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
