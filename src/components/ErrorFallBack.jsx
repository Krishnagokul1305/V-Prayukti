import { HiExclamation } from "react-icons/hi";

function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">Oops!</h1>
        <h2 className="text-lg md:text-2xl font-semibold mb-2 flex items-center justify-center gap-1">
          <HiExclamation className="size-8 text-secondary"/> Something Went Wrong
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          {error?.message || "An unexpected error has occurred."}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-secondary text-white text-base  md:text-lg font-bold rounded-lg shadow-md transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorFallBack;
