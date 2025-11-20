const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-light dark:bg-background-dark" id="preloader">
      <div className="relative flex h-32 w-32 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/20 dark:bg-primary/30 blur-xl"></div>
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white dark:bg-slate-900/50 shadow-soft">
          <div className="h-10 w-10 text-primary animate-pulse-loading">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="font-heading text-lg font-bold text-slate-800 dark:text-slate-200">Rahul's Portfolio</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">Loading experience...</p>
      </div>
    </div>
  )
}

export default Preloader

