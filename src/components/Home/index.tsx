import lits from "../../lib/lits";
import apr_lud from "../../lib/stages/apr_lud";
import sal_inv from "../../lib/stages/sal_inv";
import pen_com from "../../lib/stages/pen_com";

import { useState, useEffect } from "react";
import shift from "classnames";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  FireSimple,
  GearSix,
  HandPalm,
  MagnifyingGlass,
  Robot,
  Rocket,
  StackSimple,
  User,
} from "phosphor-react";
import { toast } from "react-hot-toast";
import { useStage } from "../../contexts/StageContext";

export function Home() {
  const [litIndex, setLitIndex] = useState(0);
  const [litList, setLitList] = useState(lits);
  const [choosingStage, setChoosingStage] = useState(false);
  const { stage } = useStage();

  useEffect(() => {
    setLitIndex(0);
    setChoosingStage(false);
    if (stage === "APR_LUD") {
      setLitList(apr_lud);
    } else if (stage === "PEN_COM") {
      setLitList(pen_com);
    } else if (stage === "SAL_INV") {
      setLitList(sal_inv);
    } else {
      //HELPLIT
      setLitList(lits);
    }
  }, [stage]);

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
            <a href={litList[litIndex].classPlanUrl} target="blank">
              <img
                className="rounded-lg"
                src={litList[litIndex].picturePath}
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
                {litList[litIndex].title}
              </h1>
              <p>{litList[litIndex].subtitle}</p>
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
                <div className="bg-helplit_sm w-8 h-8 bg-cover rounded-full"></div>
                <p>@helplit</p>
              </div>
              <div
                className={shift(
                  "py-1 px-4 rounded-2xl font-semibold text-sm text-white flex flex-row items-center gap-2",
                  {
                    "bg-aprenlud2": litList[litIndex].author === "Helplit",
                    "bg-salainv2": litList[litIndex].author === "Tamara",
                    "bg-pencomput2": litList[litIndex].author === "Rosangela",
                  }
                )}
              >
                <>
                  <StackSimple size={22} color="white" weight="bold" />
                  <p>{litList[litIndex].stage}</p>
                </>
              </div>
            </div>
          </div>
        )}

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
                  setLitIndex(litList.length - 1);
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
                if (litIndex < litList.length - 1) {
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
  const { setStage } = useStage();
  return (
    <div className="max-w-[90%] w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-center ">
      {/*Lower Card Section*/}
      <div className="flex flex-row text-white text-2xl font-black gap-8 mb-4">
        <p className="">leve-me a um palco</p>
        <p className="rotate-90 font-semibold">:)</p>
      </div>
      <div className="py-1 px-4 rounded-2xl flex flex-col font-semibold text-sm text-helplit2 items-start gap-2">
        <>
          <div
            onClick={() => setStage("HELPLIT")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-helplit2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <FireSimple size={22} weight="bold" />
            <p>Festival</p>
          </div>
          <div
            onClick={() => setStage("APR_LUD")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-aprenlud2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <Rocket size={22} weight="bold" />
            <p>Aprendizagem Lúdica</p>
          </div>
          <div
            onClick={() => setStage("PEN_COM")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-pencomput2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <Robot size={22} weight="bold" />
            <p>Pensamento Computacional</p>
          </div>
          <div
            onClick={() => setStage("SAL_INV")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-salainv2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <HandPalm size={22} weight="bold" />
            <p>Sala Invertida</p>
          </div>
        </>
      </div>
      <div></div>
    </div>
  );
};
