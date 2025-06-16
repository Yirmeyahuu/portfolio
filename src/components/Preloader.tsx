import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Increment every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#131313] overflow-hidden min-h-screen">
      {/* Floating circle backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="circle-blur circle1"></div>
        <div className="circle-blur circle2"></div>
        <div className="circle-blur circle3"></div>
        <div className="circle-blur circle4"></div>
        <div className="circle-blur circle5"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-[#131313]/70 to-[#131313] pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-4">
        <div className="relative flex items-center justify-center mb-4 sm:mb-8">
          {/* Main circle */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <div className="absolute inset-0 border-3 sm:border-4 border-yellow-400/20 rounded-full animate-spin">
              <div className="absolute inset-0 border-3 sm:border-4 border-yellow-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Orbiting dots - repositioned to be centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-orbit1" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-orbit2 delay-150" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-orbit3 delay-300" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Percentage text */}
        <div className="flex flex-col items-center">
          <span className="text-xl sm:text-2xl font-bold text-yellow-400 font-mono tracking-wider">
            {percentage}%
          </span>
          <div className="mt-3 sm:mt-4 w-36 sm:w-48 h-1 bg-yellow-400/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-yellow-400 transition-all duration-200 ease-out rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;