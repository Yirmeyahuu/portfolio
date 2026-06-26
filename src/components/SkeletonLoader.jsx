const SkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back Button Skeleton */}
        <div className="mb-8 h-10 w-28 bg-gray-200 dark:bg-[#1a1a1a] animate-pulse"></div>
        
        {/* Main Card Skeleton */}
        <div className="bg-white dark:bg-[#1a1a1a] shadow-lg p-8 border border-gray-100 dark:border-gray-800">
          {/* Header Skeleton */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gray-200 dark:bg-[#2a2a2a] animate-pulse"></div>
            <div className="h-8 w-48 bg-gray-200 dark:bg-[#2a2a2a] animate-pulse"></div>
          </div>
          
          {/* Content Skeleton */}
          <div className="space-y-4">
            {/* Repeating skeleton items */}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 animate-pulse flex-shrink-0"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;