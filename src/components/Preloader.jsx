export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <img 
            src="/poypoyrelicon.svg" 
            alt="Loading Portfolio" 
            className="w-24 h-24 shadow-lg dark:shadow-2xl dark:shadow-sky-500/20"
          />
        </div>
        <div className="relative">
          <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Jeremiah Pantaras
          </p>
          <p className="absolute inset-0 text-xl font-bold animate-shimmer">
            Jeremiah Pantaras
          </p>
        </div>
      </div>
    </div>
  )
}