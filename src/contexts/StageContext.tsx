import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

type StageContextData = {
  stage: string;
  setStage: (param: string) => void;
  choosing: boolean;
  setChoosing: (param: boolean) => void;
};

export const StageContext = createContext({} as StageContextData);

type StageContextProviderProps = {
  children: ReactNode;
};

export function StageContextProvider({ children }: StageContextProviderProps) {
  const [stage, setStage] = useState("HELPLIT");
  const [choosing, setChoosing] = useState(false);

  return (
    <StageContext.Provider
      value={{
        stage,
        setStage,
        choosing,
        setChoosing,
      }}
    >
      {children}
    </StageContext.Provider>
  );
}

export const useStage = () => {
  return useContext(StageContext);
};
