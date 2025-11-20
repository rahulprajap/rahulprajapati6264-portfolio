import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* TopAppBar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center"></div>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      <main className="flex-grow flex flex-col justify-center px-4">
        <div className="flex w-full justify-center py-3">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-white text-center">
            Sorry for the inconvenience.
          </h1>
        </div>

        <h2 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3 pt-6">
          I'am currently building this, and exciting updates are coming soon!
        </h2>

        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-3 pt-1 text-center max-w-md mx-auto">
          Oops! This page doesn't exist yet. We're still building it, but you'll see something awesome here soon.
        </p>

        <div className="mt-8 mb-4 max-w-sm mx-auto w-full">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#135bec] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#135bec]/90 active:bg-[#135bec]/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-[#135bec]"
          >
            Go to Homepage
          </button>
        </div>
      </main>

      <div className="h-5 bg-background-light dark:bg-background-dark"></div>
    </div>
  )
}

export default NotFound

