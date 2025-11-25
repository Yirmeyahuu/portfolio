import { X, Download, Printer } from 'lucide-react';
import { useEffect } from 'react';

const OpenCv = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cvPath = '/Pantaras-CV.pdf'; 

  const handlePrint = () => {
    const iframe = document.getElementById('cv-iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm cursor-pointer" 
      onClick={onClose}
    >
      <div
        className="relative w-11/12 max-w-4xl h-5/6 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Curriculum Vitae
          </h2>
          <div className="flex items-center gap-2">
            <a
              href={cvPath}
              download="Jeremiah-Pantaras-CV.pdf"
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-[#2a2a2a] border border-transparent rounded-lg hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-300 text-xs font-medium text-gray-900 dark:text-white"
            >
              <Download size={16} />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-900">
          <iframe
            id="cv-iframe"
            src={`${cvPath}#view=Fit`}
            title="Jeremiah Pantaras CV"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenCv;