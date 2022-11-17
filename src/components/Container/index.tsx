import shift from "classnames";
import { useStage } from "../../contexts/StageContext";

type Props = {
  children: JSX.Element;
};

export function Container({ children }: Props) {
  const { stage } = useStage();
  return (
    <div
      className={shift(
        "select-none bg-HELP transition-colors ease-in-out flex flex-col p-6 items-center justify-center h-[100vh] w-[100%]",
        {
          "bg-ALUD": stage === "ALUD" || stage === "DEBA",
          "bg-SINV": stage === "SINV" || stage === "ABPJ",
          "bg-PCOM": stage === "PCOM" || stage === "ROLE",
        }
      )}
    >
      {children}
    </div>
  );
}
