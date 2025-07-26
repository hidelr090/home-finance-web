import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@src/reset.css";
import App from "@src/App";
import { BrowserRouter } from "react-router-dom";
import { LoadingProvider } from "@contexts/loading/loadingProvider";
import { LoadingOverlay } from "@components/LoadingOverlay";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoadingProvider>
      <LoadingOverlay/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadingProvider>
  </StrictMode>
);
