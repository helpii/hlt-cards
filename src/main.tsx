import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

import { StageContextProvider } from "./contexts/StageContext";
import { DrawedContextProvider } from "./contexts/DrawedContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <DrawedContextProvider>
        <StageContextProvider>
          <Toaster position="top-center" />
          <App />
        </StageContextProvider>
      </DrawedContextProvider>
    </>
  </React.StrictMode>
);
