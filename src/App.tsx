import { MagnifyingGlassPlus } from "phosphor-react";

import { useState, useEffect } from "react";

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
      <h1>Hello React</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <img
        src="https://avatars2.githubusercontent.com/u/39895671?s=400"
        alt="react-icon"
      />
    </div>
  );
}
