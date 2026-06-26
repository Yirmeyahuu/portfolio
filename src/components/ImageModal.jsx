import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

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

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 -mt-12 md:-mr-12 md:mt-0 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X size={32} />
        </button>
        
        <div className="w-full flex justify-center items-center overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="max-w-full max-h-[80vh] object-contain shadow-2xl"
          />
        </div>
        
        <button
          onClick={handleDownload}
          className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 shadow-lg cursor-pointer"
        >
          <Download size={18} />
          <span className="font-medium">Download Photo</span>
        </button>
      </div>
    </div>
  );
}
