import lits from "../../lib/lits";
//import lits especificas pra cada palco
import { useState } from "react";
import shift from "classnames";
import { ArrowCircleLeft, ArrowCircleRight, StackSimple } from "phosphor-react";

export function Home() {
  const [litIndex, setLitIndex] = useState(0);
  const [litList, setLitList] = useState(lits);

  function updateLitList() {
    setLitIndex(0);
    //if HELPLIT, aprenlud, salainv...
    //   troca com setLitList(..) dos outros imports
  }

  return (
    <>
      {/*GradientBG //use custom styling with classnames*/}
      <div
        className={shift(
          "transition-colors ease-in-out flex flex-col justify-center items-center h-[100vh] w-[100%]",
          {
            "bg-aprenlud": lits[litIndex].author === "Helplit",
            "bg-salainv": lits[litIndex].author === "Tamara",
            "bg-pen-comput": lits[litIndex].author === "Rosangela",
          }
        )}
      >
        {/*LitCard*/}
        <div
          className={shift(
            "rounded-b-[30px] border-b-8 border-[#b9b9b9] hover:cursor-pointer rounded-xl max-w-[90%] bg-white w-[401px] p-2 h[500px] mb-8 flex flex-col justify-center items-center transition-colors",
            {
              "hover:border-aprenlud1": lits[litIndex].author === "Helplit",
              "hover:border-salainv1": lits[litIndex].author === "Tamara",
              "hover:border-pencomput1": lits[litIndex].author === "Rosangela",
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
              className={shift("text-lg mb-1 border-b-2", {
                "border-aprenlud1": lits[litIndex].author === "Helplit",
                "border-salainv1": lits[litIndex].author === "Tamara",
                "border-pencomput1": lits[litIndex].author === "Rosangela",
              })}
            >
              {lits[litIndex].title}
            </h1>
            <p>{lits[litIndex].subtitle}</p>
          </div>
          {/*Card Footer Info*/}
          <div className="w-[100%] mt-2 flex flex-row justify-between items-center">
            <div
              className={shift(
                " font-semibold flex flex-row gap-1 items-center ",
                {
                  "text-aprenlud2": lits[litIndex].author === "Helplit",
                  "text-salainv2": lits[litIndex].author === "Tamara",
                  "text-pencomput2": lits[litIndex].author === "Rosangela",
                }
              )}
            >
              <div className="bg-helpii_sm w-8 h-8 bg-cover rounded"></div>
              <p>@helpii</p>
            </div>
            <div
              className={shift(
                "py-1 px-4 rounded-2xl font-semibold text-sm text-white flex flex-row items-center gap-2  hover:opacity-80",
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

        {/*NavigationOptions*/}
        <div className="flex flex-row text-white">
          {/*PreviousCardButton*/}
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
          {/*NextCardButton*/}
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
    </>
  );
}
