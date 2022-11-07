import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type CardsContextData = {
  drawed: number;
  setDrawed: (param: number) => void;
  deckSize: number;
  setDeckSize: (param: number) => void;
};

export const CardsContext = createContext({} as CardsContextData);

type CardsContextProviderProps = {
  children: ReactNode;
};

export function CardsContextProvider({ children }: CardsContextProviderProps) {
  const [drawed, setDrawed] = useState(0);
  const [deckSize, setDeckSize] = useState(0);

  return (
    <CardsContext.Provider
      value={{
        drawed,
        setDrawed,
        deckSize,
        setDeckSize,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}

export const useDrawed = () => {
  return useContext(CardsContext);
};
