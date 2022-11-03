import { useState, useEffect } from "react";
import { GradientBG } from "./components/GradientBG";

import "./styles/main.css";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), 1618));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex justify-center align-middle">
      <GradientBG />
    </div>
  );
}
