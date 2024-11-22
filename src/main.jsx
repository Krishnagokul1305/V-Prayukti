import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster toastOptions={{
      style:{
        fontSize: "1.25rem",
        border: "2px solid #eb5939",
        backgroundColor:"black",
        color: "#fff",
      },
      duration: 2500,
    }}/>
  </StrictMode>
);
