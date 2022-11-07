import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";

import { StageContextProvider } from "./contexts/StageContext";
import { CardsContextProvider } from "./contexts/CardsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <CardsContextProvider>
        <StageContextProvider>
          <Toaster position="top-center" />
          <App />
        </StageContextProvider>
      </CardsContextProvider>
    </>
  </React.StrictMode>
);
