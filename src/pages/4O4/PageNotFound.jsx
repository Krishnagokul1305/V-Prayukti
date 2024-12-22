function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <h1 className="text-9xl font-extrabold text-orange-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-white/60">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-white/60 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 text-lg text-white bg-orange-700 hover:bg-orange-800 rounded-md shadow-md"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default PageNotFound;
