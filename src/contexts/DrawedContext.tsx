import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type DrawedContextData = {
  drawed: number;
  setDrawed: (param: number) => void;
  deckSize: number;
  setDeckSize: (param: number) => void;
};

export const DrawedContext = createContext({} as DrawedContextData);

type DrawedContextProviderProps = {
  children: ReactNode;
};

export function DrawedContextProvider({
  children,
}: DrawedContextProviderProps) {
  const [drawed, setDrawed] = useState(0);
  const [deckSize, setDeckSize] = useState(0);

  return (
    <DrawedContext.Provider
      value={{
        drawed,
        setDrawed,
        deckSize,
        setDeckSize,
      }}
    >
      {children}
    </DrawedContext.Provider>
  );
}

export const useDrawed = () => {
  return useContext(DrawedContext);
};
