import HomePage from "./pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import EventPage from "./pages/Event/EventPage";
import FallBackLoader from "./components/FallBackLoader";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/ErrorFallBack";
import ThankYou from "./pages/ThankYou/ThankYou";
import RegisterPage from "./pages/Register/RegisterPage";
import PageNotFound from "./pages/4O4/PageNotFound";

const EventsPage = lazy(() => import("./pages/Events/EventsPage"));
const SearchPage = lazy(() => import("./pages/search/SearchPage"));

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/events",
        element: (
          <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => (window.location.href = "/")}
          >
            <Suspense fallback={<FallBackLoader />}>
              <EventsPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/events/:id",
        element: (
          <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => (window.location.href = "/events")}
          >
            <EventPage />
          </ErrorBoundary>
        ),
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/register/thankyou/:id",
        element: (
          <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => (window.location.href = "/events")}
          >
            <ThankYou />
          </ErrorBoundary>
        ),
      },
      {
        path: "/register/search",
        element: (
          <Suspense fallback={<FallBackLoader />}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
