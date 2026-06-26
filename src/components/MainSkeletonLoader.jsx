const MainSkeletonLoader = () => {
  const SkeletonCard = ({ children, className = '' }) => (
    <div className={`bg-white dark:bg-[#1a1a1a] shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  );

  const SkeletonLine = ({ className = '' }) => (
    <div className={`bg-gray-200 dark:bg-[#2a2a2a] animate-pulse ${className}`}></div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-4 sm:py-6 flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Column - Side Profile */}
        <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 lg:sticky lg:top-6 lg:self-start z-20">
          <SkeletonCard className="mt-2 lg:mt-0">
            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-6 text-center sm:text-left lg:text-center">
              <div className="flex-shrink-0 w-48 h-48 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gray-200 dark:bg-[#2a2a2a] animate-pulse"></div>
              <div className="w-full flex flex-col items-center sm:items-start lg:items-center space-y-4">
                <SkeletonLine className="h-8 w-3/4 sm:w-3/5 lg:w-3/4" />
                <SkeletonLine className="h-5 w-1/2 sm:w-2/5 lg:w-1/2" />
                <div className="flex flex-col gap-2 w-full max-w-[280px] mx-auto pt-2">
                  <div className="flex flex-row justify-center gap-2 w-full">
                    <SkeletonLine className="h-9 flex-1" />
                    <SkeletonLine className="h-9 flex-1" />
                  </div>
                  <SkeletonLine className="h-9 w-full" />
                </div>
              </div>
            </div>
          </SkeletonCard>
        </div>

        {/* Right Column - Main Content */}
        <div className="flex-1 w-full flex flex-col min-w-0">

        {/* Company Section Skeleton */}
        <SkeletonCard className="mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 dark:bg-[#2a2a2a] animate-pulse"></div>
            <div className="flex-1 w-full space-y-3">
              <SkeletonLine className="h-6 w-1/3" />
              <SkeletonLine className="h-4 w-full" />
            </div>
          </div>
        </SkeletonCard>
        
        {/* Main Content Grid Skeleton */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <SkeletonCard>
              <SkeletonLine className="h-6 w-24 mb-6" />
              <div className="space-y-3">
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-4/5" />
              </div>
            </SkeletonCard>
            <SkeletonCard>
              <SkeletonLine className="h-6 w-32 mb-6" />
              <SkeletonLine className="h-10 w-full" />
              <SkeletonLine className="h-10 w-full mt-4" />
            </SkeletonCard>
          </div>
          <div className="space-y-6">
            <SkeletonCard>
              <SkeletonLine className="h-6 w-28 mb-6" />
              <div className="space-y-4">
                <SkeletonLine className="h-12 w-full" />
                <SkeletonLine className="h-12 w-full" />
                <SkeletonLine className="h-12 w-full" />
              </div>
            </SkeletonCard>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainSkeletonLoader;