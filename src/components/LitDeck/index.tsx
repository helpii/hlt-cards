import { useStage } from "../../contexts/StageContext";
import { useDrawed } from "../../contexts/DrawedContext";

import festivalDeck from "../../lib/lits";
import apr_lud from "../../lib/stages/apr_lud";
import sal_inv from "../../lib/stages/sal_inv";
import pen_com from "../../lib/stages/pen_com";

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
    if (stage === "APR_LUD") {
      setLitList(apr_lud);
      setDeckSize(apr_lud.length);
    } else if (stage === "PEN_COM") {
      setLitList(pen_com);
      setDeckSize(pen_com.length);
    } else if (stage === "SAL_INV") {
      setLitList(sal_inv);
      setDeckSize(sal_inv.length);
    } else {
      //default
      setLitList(festivalDeck);
      setDeckSize(festivalDeck.length);
    }
  }, [stage]);

  return (
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
          className={shift("text-lg mb-1 border-b-2 border-helplit1", {
            "border-salainv1": stage === "SAL_INV",
            "border-aprenlud1": stage === "APR_LUD",
            "border-pencomput1": stage === "PEN_COM",
          })}
        >
          {litList[drawed].title}
        </h1>
        <p>{litList[drawed].subtitle}</p>
      </div>
      {/*Card Footer Info*/}
      <div className="text-helplit2 w-[100%] mt-2 flex flex-row justify-between items-center">
        <div
          className={shift("font-semibold flex flex-row gap-1 items-center ", {
            "text-aprenlud2": stage === "APR_LUD",
            "text-salainv2": stage === "SAL_INV",
            "text-pencomput2": stage === "PEN_COM",
          })}
        >
          <div className="bg-helplit_sm w-8 h-8 bg-cover rounded-full"></div>
          <p>@helplit</p>
        </div>
        <div
          className={shift(
            "py-1 px-4 rounded-2xl text-clip overflow-hidden font-semibold text-sm text-white flex flex-row items-center gap-2",
            {
              "bg-aprenlud2": litList[drawed].author === "Helplit",
              "bg-salainv2": litList[drawed].author === "Tamara",
              "bg-pencomput2": litList[drawed].author === "Rosangela",
            }
          )}
        >
          <>
            <StackSimple size={22} color="white" weight="bold" />
            <p>{litList[drawed].stage}</p>
          </>
        </div>
      </div>
    </div>
  );
}
