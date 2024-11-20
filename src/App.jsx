import HomePage from "./pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./components/ScrollToTop";
import EventPage from "./pages/Event/EventPage";
import FallBackLoader from "./components/FallBackLoader";
import { lazy, Suspense } from "react";

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
          <Suspense fallback={<FallBackLoader />}>
            <EventsPage />
          </Suspense>
        ),
      },
      { path: "/events/:event", element: <EventPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
