import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type StageContextData = {
  stage: string;
  setStage: (param: string) => void;
};

export const StageContext = createContext({} as StageContextData);

type StageContextProviderProps = {
  children: ReactNode;
};

export function StageContextProvider({ children }: StageContextProviderProps) {
  const [stage, setStage] = useState("HELPLIT");

  return (
    <StageContext.Provider
      value={{
        stage,
        setStage,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}

export const useStage = () => {
  return useContext(StageContext);
};
