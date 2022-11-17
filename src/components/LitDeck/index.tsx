import { useStage } from "../../contexts/StageContext";
import { useDrawed } from "../../contexts/CardsContext";

import festivalDeck from "../../lib/lits";
import ALUD from "../../lib/stages/ALUD";
import SINV from "../../lib/stages/SINV";
import PCOM from "../../lib/stages/PCOM";
import DEBA from "../../lib/stages/DEBA";
import ROLE from "../../lib/stages/ROLE";
import ABPJ from "../../lib/stages/ABPJ";

import { getStageIcon, getStageName } from "../../helpers";

import shift from "classnames";
import { useEffect, useState } from "react";

export function LitDeck() {
  const { stage } = useStage();
  const { drawed, setDrawed, setDeckSize } = useDrawed();

  const [litList, setLitList] = useState(festivalDeck);

  useEffect(() => {
    setDrawed(0); //volta pra primeira carta

    //atualiza a litList com a troca de stage
    if (stage === "ALUD") {
      setLitList(ALUD);
      setDeckSize(ALUD.length);
    } else if (stage === "PCOM") {
      setLitList(PCOM);
      setDeckSize(PCOM.length);
    } else if (stage === "DEBA") {
      setLitList(DEBA);
      setDeckSize(DEBA.length);
    } else if (stage === "ROLE") {
      setLitList(ROLE);
      setDeckSize(ROLE.length);
    } else if (stage === "ABPJ") {
      setLitList(ABPJ);
      setDeckSize(ABPJ.length);
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
    <a
      href={litList[drawed].classPlanUrl}
      target="blank"
      className={shift(
        "rounded-b-[30px] hover:border-HELP_weak border-b-8 hover:bg-[#f7f7f7] border-[#b9b9b9] hover:cursor-pointer rounded-xl max-w-[90%] bg-white w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-between items-center transition-colors",
        {
          "hover:border-b-SINV_weak": stage === "SINV" || stage === "ABPJ",
          "hover:border-b-ALUD_weak": stage === "ALUD" || stage === "DEBA",
          "hover:border-b-PCOM_weak": stage === "PCOM" || stage === "ROLE",
        }
      )}
    >
      <div
        className={shift(
          "group-hover:bg-[#f7f7f7] absolute self-start rounded-br-lg bg-white pb-[6px] pr-[6px] text-HELP_stronk font-semibold flex flex-row gap-1 items-center transition-colors",
          {
            "border-b-SINV_weak": stage === "SINV" || stage === "ABPJ",
            "border-b-ALUD_weak": stage === "ALUD" || stage === "DEBA",
            "border-b-PCOM_weak": stage === "PCOM" || stage === "ROLE",
          }
        )}
      >
        <div className="bg-helplit_sm w-8 h-8 bg-cover rounded-full"></div>
        <p>@helplit</p>
      </div>
      <img
        className="rounded-lg"
        src={litList[drawed].picturePath}
        width="389"
        height="257"
      />
      {/*Lower Card Section*/}
      <div className="flex flex-col items-center p-2 text-center">
        <h1
          className={shift("text-lg mb-1 border-b-2 border-b-HELP_weak", {
            "border-b-SINV_weak": stage === "SINV" || stage === "ABPJ",
            "border-b-ALUD_weak": stage === "ALUD" || stage === "DEBA",
            "border-b-PCOM_weak": stage === "PCOM" || stage === "ROLE",
          })}
        >
          {litList[drawed].title}
        </h1>
        <p>{litList[drawed].subtitle}</p>
      </div>
      {/*Card Footer Info*/}
      <div className=" w-[100%] mt-2 flex flex-row justify-center items-center">
        <div
          className={shift(
            "py-1 pl-2 pr-3 rounded-2xl text-clip overflow-hidden font-semibold text-sm text-white flex flex-row items-center gap-1",
            {
              "bg-ALUD_stronk":
                litList[drawed].stage === "ALUD" ||
                litList[drawed].stage === "DEBA",
              "bg-SINV_stronk":
                litList[drawed].stage === "SINV" ||
                litList[drawed].stage === "ABPJ",
              "bg-PCOM_stronk":
                litList[drawed].stage === "PCOM" ||
                litList[drawed].stage === "ROLE",
            }
          )}
        >
          <>
            {getStageIcon(litList[drawed].stage)}
            <p>{getStageName(litList[drawed].stage)}</p>
          </>
        </div>
      </div>
    </a>
  );
}
