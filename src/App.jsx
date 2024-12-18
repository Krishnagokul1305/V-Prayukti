import HomePage from "./pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import EventPage from "./pages/Event/EventPage";
import FallBackLoader from "./components/FallBackLoader";
import { lazy, Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "./components/ErrorFallBack";
import ThankYou from "./pages/ThankYou/ThankYou";
import RegisterPage from "./pages/Register/RegisterPage";

const EventsPage = lazy(() => import("./pages/Events/EventsPage"));

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
    ],
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
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
