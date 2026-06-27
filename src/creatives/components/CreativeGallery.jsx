import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../../components/ImageModal';

export default function CreativeGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate an array of images from 1 to 20
  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/creative-assets/creative-gallery/${i + 1}.webp`,
    title: `Creative Work ${i + 1}`
  }));

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-semibold">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            SELECTED{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              WORKS
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            A curated selection of my visual projects, spanning photography, 
            cinematography, and creative editing.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.slice(0, 6).map((image, index) => {
            // Balanced Bento Grid layout for 6 items
            const bentoClasses = [
              "md:col-span-2 md:row-span-2 sm:col-span-2", // Large hero square
              "md:col-span-1 md:row-span-1 sm:col-span-1", // Small square
              "md:col-span-1 md:row-span-2 sm:col-span-1", // Tall rectangle
              "md:col-span-1 md:row-span-1 sm:col-span-1", // Small square
              "md:col-span-2 md:row-span-1 sm:col-span-2", // Wide rectangle
              "md:col-span-2 md:row-span-1 sm:col-span-2", // Wide rectangle
            ];

            return (
              <div 
                key={image.id}
                className={`relative group overflow-hidden bg-gray-900 cursor-pointer border border-gray-800 ${bentoClasses[index]}`}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to hide broken images just in case
                    e.target.parentElement.style.display = 'none';
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold tracking-widest uppercase border border-white/30 px-6 py-2 backdrop-blur-sm">
                    View
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/creative/gallery"
            className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
          >
            View All Works
          </Link>
        </div>
      </div>

      {/* Reused Image Modal */}
      <ImageModal 
        isOpen={!!selectedImage}
        image={selectedImage?.src}
        title={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
