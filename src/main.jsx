import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
// import { ErrorBoundary } from "react-error-boundary";
// import ErrorFallBack from "./components/ErrorFallBack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => (window.location.href = "/")}
    > */}
      <App />
      <Toaster
        toastOptions={{
          style: {
            fontSize: "1.25rem",
            border: "2px solid #eb5939",
            backgroundColor: "black",
            color: "#fff",
          },
          duration: 2500,
        }}
      />
    {/* </ErrorBoundary> */}
  </StrictMode>
);
