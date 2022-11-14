import { useStage } from "../../contexts/StageContext";
import { useDrawed } from "../../contexts/CardsContext";

import festivalDeck from "../../lib/lits";
import ALUD from "../../lib/stages/ALUD";
import SINV from "../../lib/stages/SINV";
import PCOM from "../../lib/stages/PCOM";

import { getStageName } from "../../helpers";

import shift from "classnames";
import { useEffect, useState } from "react";
import { StackSimple } from "phosphor-react";

export function LitDeck() {
  const { stage } = useStage();
  const { drawed, setDrawed, setDeckSize } = useDrawed();

  const [litList, setLitList] = useState(festivalDeck);

  useEffect(() => {
    setDrawed(0); //volta pra primeira carta

    //atualiza a litList
    if (stage === "ALUD") {
      setLitList(ALUD);
      setDeckSize(ALUD.length);
    } else if (stage === "PCOM") {
      setLitList(PCOM);
      setDeckSize(PCOM.length);
    } else if (stage === "SINV") {
      setLitList(SINV);
      setDeckSize(SINV.length);
    } else {
      //default
      setLitList(festivalDeck);
      setDeckSize(festivalDeck.length);
    }
  }, [stage]);

  return (
    <div
      className={shift(
        "rounded-b-[30px] hover:border-HELP_weak border-b-8 hover:bg-[#f7f7f7] border-[#b9b9b9] hover:cursor-pointer rounded-xl max-w-[90%] bg-white w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-between items-center transition-colors",
        {
          "hover:border-SINV_weak": stage === "SINV",
          "hover:border-ALUD_weak": stage === "ALUD",
          "hover:border-PCOM_weak": stage === "PCOM",
        }
      )}
    >
      <a href={litList[drawed].classPlanUrl} target="blank">
        <img
          className="rounded-lg"
          src={litList[drawed].picturePath}
          width="389"
          height="257"
        />
      </a>
      {/*Lower Card Section*/}
      <div className="flex flex-col items-center p-2 text-center">
        <h1
          className={shift("text-lg mb-1 border-b-2 border-b-HELP_weak", {
            "border-b-SINV_weak": stage === "SINV",
            "border-b-ALUD_weak": stage === "ALUD",
            "border-b-PCOM_weak": stage === "PCOM",
          })}
        >
          {litList[drawed].title}
        </h1>
        <p>{litList[drawed].subtitle}</p>
      </div>
      {/*Card Footer Info*/}
      <div className="text-HELP_stronk w-[100%] mt-2 flex flex-row justify-between items-center">
        <div
          className={shift("font-semibold flex flex-row gap-1 items-center ", {
            "text-ALUD_stronk": stage === "ALUD",
            "text-SINV_stronk": stage === "SINV",
            "text-PCOM_stronk": stage === "PCOM",
          })}
        >
          <div className="bg-helplit_sm w-8 h-8 bg-cover rounded-full"></div>
          <p>@helplit</p>
        </div>
        <div
          className={shift(
            "py-1 px-4 rounded-2xl text-clip overflow-hidden font-semibold text-sm text-white flex flex-row items-center gap-2",
            {
              "bg-ALUD_stronk": litList[drawed].stage === "ALUD",
              "bg-SINV_stronk": litList[drawed].stage === "SINV",
              "bg-PCOM_stronk": litList[drawed].stage === "PCOM",
            }
          )}
        >
          <>
            <StackSimple size={22} color="white" weight="bold" />
            <p>{getStageName(litList[drawed].stage)}</p>
          </>
        </div>
      </div>
    </div>
  );
}
