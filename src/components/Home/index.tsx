import lits from "../../lib/lits";
import { useState } from "react";
import shift from "classnames";
/**
 *
 * escolher umas 5 accent colors legais e fazer o GradientBG adotar um gradiente do branco a elas, pelo classnames
 * é só cadastrar lá que nem o bg-nlw-gradient e chamar conforme lits[litIndex].stage
 */
export function Home() {
  const [litIndex, setLitIndex] = useState(0);
  const [accent, setAccent] = useState("#f4f4f4");
  return (
    <>
      {/*GradientBG //use custom styling with classnames*/}
      <div
        className={shift(
          "transition-colors ease-in-out flex flex-col justify-center items-center h-[100vh] w-[100%]",
          {
            "bg-apren-lud": lits[litIndex].author === "JM",
            "bg-sala-inv": lits[litIndex].author === "Tamara",
            "bg-pen-comput": lits[litIndex].author === "Ro",
          }
        )}
      >
        {/*LitCard*/}
        <div className="rounded-b-2xl border-b-8 border-[#b9b9b9] hover:cursor-pointer hover:border-cyan-500 rounded-xl bg-white w-[401px] pt-[6px] h[500px] mb-8 flex flex-col justify-center items-center transition-colors">
          <a href={lits[litIndex].classPlanUrl} target="blank">
            <img
              className="rounded-lg"
              src={lits[litIndex].picturePath}
              width="389"
              height="257"
            />
          </a>
          {/*Lower Card Section*/}
          <div className="my-4">
            <h1>{lits[litIndex].author}</h1>
            <h1>{litIndex}</h1>
          </div>
        </div>

        {/*NavigationOptions*/}
        <div>
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
            Prev
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
            Next
          </button>
        </div>
      </div>
    </>
  );
}
