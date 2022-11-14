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
          "bg-ALUD": stage === "ALUD",
          "bg-SINV": stage === "SINV",
          "bg-PCOM": stage === "PCOM",
        }
      )}
    >
      {children}
    </div>
  );
}

/*
type Props = {
  title: string,
  children: JSX.Element,};
const Page = ({ title, children }: Props) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);*/