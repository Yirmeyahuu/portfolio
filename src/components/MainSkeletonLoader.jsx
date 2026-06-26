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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header/Profile Skeleton */}
        <SkeletonCard className="mt-8 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 bg-gray-200 dark:bg-[#2a2a2a] animate-pulse"></div>
            <div className="flex-1 w-full space-y-4">
              <SkeletonLine className="h-8 w-3/5" />
              <SkeletonLine className="h-5 w-2/5" />
              <div className="flex flex-wrap gap-3 pt-2">
                <SkeletonLine className="h-10 w-36 " />
                <SkeletonLine className="h-10 w-32 " />
              </div>
            </div>
          </div>
        </SkeletonCard>

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
  );
};

export default MainSkeletonLoader;