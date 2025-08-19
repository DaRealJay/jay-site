export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-neutral-600">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="inline-flex mt-6 rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-neutral-800">
          Go home
        </a>
      </div>
    </main>
  );
}
