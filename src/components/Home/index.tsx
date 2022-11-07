import lits from "../../lib/lits";
//import lits especificas pra cada palco
import { useState } from "react";
import shift from "classnames";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  GearSix,
  MagnifyingGlass,
  StackSimple,
  User,
} from "phosphor-react";
import { toast } from "react-hot-toast";
import { useStage } from "../../contexts/StageContext";

export function Home() {
  const [litIndex, setLitIndex] = useState(0);
  const [litList, setLitList] = useState(lits);
  const [choosingStage, setChoosingStage] = useState(false);
  const { stage, setStage } = useStage();

  function updateLitList() {
    setLitIndex(0);
    //if HELPLIT, aprenlud, salainv...
    //   troca com setLitList(..) dos outros imports
  }

  return (
    <>
      <div
        className={shift(
          "select-none bg-helplit transition-colors ease-in-out flex flex-col p-6 items-center justify-center h-[100vh] w-[100%]",
          {
            "bg-aprenlud": stage === "APR_LUD",
            "bg-salainv": stage === "SAL_INV",
            "bg-pen-comput": stage === "PEN_COM",
          }
        )}
      >
        {choosingStage ? (
          <StageSelector />
        ) : (
          <div
            className={shift(
              "rounded-b-[30px] hover:border-helplit1 border-b-8 hover:bg-[#f7f7f7] border-[#b9b9b9] hover:cursor-pointer rounded-xl max-w-[90%] bg-white w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-between items-center transition-colors",
              {
                "hover:border-salainv1": stage === "SAL_INV",
                "hover:border-aprenlud1": stage === "APR_LUD",
                "hover:border-pencomput1": stage === "PEN_COM",
              }
            )}
          >
            <a href={lits[litIndex].classPlanUrl} target="blank">
              <img
                className="rounded-lg"
                src={lits[litIndex].picturePath}
                width="389"
                height="257"
              />
            </a>
            {/*Lower Card Section*/}
            <div className="flex flex-col items-center p-2 text-center">
              <h1
                className={shift("text-lg mb-1 border-b-2 border-helplit1", {
                  "border-salainv1": stage === "SAL_INV",
                  "border-aprenlud1": stage === "APR_LUD",
                  "border-pencomput1": stage === "PEN_COM",
                })}
              >
                {lits[litIndex].title}
              </h1>
              <p>{lits[litIndex].subtitle}</p>
            </div>
            {/*Card Footer Info*/}
            <div className="text-helplit2 w-[100%] mt-2 flex flex-row justify-between items-center">
              <div
                className={shift(
                  "font-semibold flex flex-row gap-1 items-center ",
                  {
                    "text-aprenlud2": stage === "APR_LUD",
                    "text-salainv2": stage === "SAL_INV",
                    "text-pencomput2": stage === "PEN_COM",
                  }
                )}
              >
                <div className="bg-helplit_sm w-6 h-6 bg-cover rounded-md"></div>
                <p>@helplit</p>
              </div>
              <div
                className={shift(
                  "py-1 px-4 rounded-2xl font-semibold text-sm text-white flex flex-row items-center gap-2",
                  {
                    "bg-aprenlud2": lits[litIndex].author === "Helplit",
                    "bg-salainv2": lits[litIndex].author === "Tamara",
                    "bg-pencomput2": lits[litIndex].author === "Rosangela",
                  }
                )}
              >
                <>
                  <StackSimple size={22} color="white" weight="bold" />
                  <p>{lits[litIndex].stage}</p>
                </>
              </div>
            </div>
          </div>
        )}
        {/*LitCard*/}

        {/*NavigationOptions*/}
        <div className="w-[100%] max-w-[401px] flex flex-row text-white justify-between items-center ">
          {/*Gibberish*/}
          <div className="flex flex-row gap-2">
            <button
              onClick={() =>
                toast("Você na Helplit... em breve.", {
                  icon: "👩‍🎤🧡",
                })
              }
            >
              <User
                size={32}
                weight="bold"
                className="ml-1 rounded-full hover:opacity-80 bg-white text-[#9c9c9c] p-1"
              />
            </button>
            <button
              onClick={() =>
                toast("Quem liga para configurações?", {
                  icon: "🤖⚡",
                })
              }
            >
              <GearSix
                size={32}
                weight="bold"
                className="rounded-full hover:opacity-80 bg-white text-[#9c9c9c] p-1"
              />
            </button>
          </div>

          {/*Elaborate actions*/}
          <div className="flex flex-row  gap-4 ">
            <button onClick={() => setChoosingStage(!choosingStage)}>
              <StackSimple
                size={40}
                weight="bold"
                className={shift(
                  "text-helplit2 rounded-full hover:opacity-80 bg-white p-1",
                  {
                    "text-aprenlud2": stage === "APR_LUD",
                    "text-salainv2": stage === "SAL_INV",
                    "text-pencomput2": stage === "PEN_COM",
                  }
                )}
              />
            </button>
            <button
              onClick={() =>
                toast("Busca de lits... em breve.", {
                  icon: "🃏🎴",
                })
              }
            >
              <MagnifyingGlass
                size={40}
                weight="bold"
                className={shift(
                  "text-helplit2 rounded-full hover:opacity-80 bg-white p-1",
                  {
                    "text-aprenlud2": stage === "APR_LUD",
                    "text-salainv2": stage === "SAL_INV",
                    "text-pencomput2": stage === "PEN_COM",
                  }
                )}
              />
            </button>
          </div>
          {/*Immediate actions*/}
          <div className="flex flex-row  gap-2 ">
            <button
              onClick={() => {
                if (litIndex > 0) {
                  setLitIndex(litIndex - 1);
                } else {
                  setLitIndex(lits.length - 1);
                }
              }}
            >
              <ArrowCircleLeft
                size={48}
                weight="bold"
                className="hover:opacity-80"
              />
            </button>
            <button
              onClick={() => {
                if (litIndex < lits.length - 1) {
                  setLitIndex(litIndex + 1);
                } else {
                  setLitIndex(0);
                }
              }}
            >
              <ArrowCircleRight
                size={48}
                weight="bold"
                className="hover:opacity-80"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const StageSelector = () => {
  return (
    <div className="max-w-[90%] w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-center ">
      {/*Lower Card Section*/}
      <div className="flex flex-row text-white text-2xl font-black gap-8">
        <p className="">leve-me a um palco</p>
        <p className="rotate-90 font-semibold">:)</p>
      </div>
      <div></div>
    </div>
  );
};
