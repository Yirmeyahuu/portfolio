import { X, Download } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ImageModal({ image, title, isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  const handleDownload = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = image.split('/').pop() || 'download';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
      const a = document.createElement('a');
      a.href = image;
      a.download = image.split('/').pop() || 'download';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Fixed Close Button for consistent positioning across all devices */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/80 transition-all cursor-pointer border border-white/10"
        aria-label="Close modal"
      >
        <X size={28} />
      </button>

      <div 
        className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt={title} 
          className="max-w-full max-h-[75vh] md:max-h-[85vh] object-contain shadow-2xl drop-shadow-2xl"
        />
        
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 shadow-lg cursor-pointer rounded-full backdrop-blur-sm"
        >
          <Download size={18} />
          <span className="font-medium text-sm">Download Photo</span>
        </button>
      </div>
    </div>
  );

  // Render the modal directly into document.body to escape GSAP wrapper transforms and filters
  return createPortal(modalContent, document.body);
}
