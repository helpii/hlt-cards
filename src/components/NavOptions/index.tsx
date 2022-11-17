import {
  ArrowCircleLeft,
  ArrowCircleRight,
  GearSix,
  MagnifyingGlass,
  StackSimple,
  User,
} from "phosphor-react";
import shift from "classnames";

import { toast } from "react-hot-toast";
import { useStage } from "../../contexts/StageContext";
import { useDrawed } from "../../contexts/CardsContext";

export function NavOptions() {
  const { drawed, setDrawed, deckSize } = useDrawed();
  const { stage, setStage, choosing, setChoosing } = useStage();
  return (
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
        <button onClick={() => setChoosing(!choosing)}>
          <StackSimple
            size={40}
            weight="bold"
            className={shift(
              "text-HELP_stronk rounded-full hover:opacity-80 bg-white p-1",
              {
                "text-ALUD_stronk": stage === "ALUD" || stage === "DEBA",
                "text-SINV_stronk": stage === "SINV" || stage === "ABPJ",
                "text-PCOM_stronk": stage === "PCOM" || stage === "ROLE",
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
              "text-HELP_stronk rounded-full hover:opacity-80 bg-white p-1",
              {
                "text-ALUD_stronk": stage === "ALUD" || stage === "DEBA",
                "text-SINV_stronk": stage === "SINV" || stage === "ABPJ",
                "text-PCOM_stronk": stage === "PCOM" || stage === "ROLE",
              }
            )}
          />
        </button>
      </div>
      {/*Immediate actions*/}
      <div className="flex flex-row  gap-2 ">
        <button
          onClick={() => {
            if (drawed > 0) {
              setDrawed(drawed - 1);
            } else {
              setDrawed(deckSize - 1);
            }
          }}
        >
          <ArrowCircleLeft
            size={48}
            weight="bold"
            className={shift("hover:opacity-80", {
              "hover:opacity-100 cursor-not-allowed": choosing,
            })}
          />
        </button>
        <button
          onClick={() => {
            if (drawed < deckSize - 1) {
              setDrawed(drawed + 1);
            } else {
              setDrawed(0);
            }
          }}
        >
          <ArrowCircleRight
            size={48}
            weight="bold"
            className={shift("hover:opacity-80", {
              "hover:opacity-100 cursor-not-allowed": choosing,
            })}
          />
        </button>
      </div>
    </div>
  );
}
