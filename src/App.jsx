export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center bg-gray-50 text-gray-900 dark:bg-zinc-950 dark:text-zinc-100">
      <img src="/fly-social-square.webp" alt="Fly.io balloon logo" className="w-48 h-48 rounded-3xl" />
      <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300">
        429 · Too Many Requests
      </span>
      <h1 className="text-4xl font-bold tracking-tight">Rate limit reached</h1>
      <p className="max-w-md text-gray-600 dark:text-zinc-400">
        This app is running on a free-tier Fly.io plan and has received more requests than its
        allowance. Please wait a moment and try again.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => location.reload()}
          className="rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white hover:bg-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        >
          Try again
        </button>
        <a
          href="https://fly.io"
          className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          Learn about Fly.io
        </a>
      </div>
      <p className="text-xs text-gray-400 dark:text-zinc-600">Hosted on Fly.io</p>
    </main>
  )
}
