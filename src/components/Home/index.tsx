import lits from "../../lib/lits";
import { useEffect, useState } from "react";
import shift from "classnames";
/**
 *
 * escolher umas 5 accent colors legais e fazer o GradientBG adotar um gradiente do branco a elas, pelo classnames
 * é só cadastrar lá que nem o bg-nlw-gradient e chamar conforme lits[litIndex].stage
 */
export function Home() {
  const [litIndex, setLitIndex] = useState(0);

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
            "rounded-b-2xl border-b-8 border-[#b9b9b9] hover:cursor-pointer rounded-xl bg-white w-[401px] pt-[6px] h[500px] mb-8 flex flex-col justify-center items-center transition-colors",
            {
              "border-aprenlud2 hover:border-aprenlud1":
                lits[litIndex].author === "Helplit",
              "border-salainv2 hover:border-salainv1":
                lits[litIndex].author === "Tamara",
              "border-pencomput2 hover:border-pencomput1":
                lits[litIndex].author === "Rosangela",
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
          <div className="my-4 flex flex-col items-center">
            <h1 className="text-lg mb-2">{lits[litIndex].title}</h1>
            <p className="text-center">{lits[litIndex].subtitle}</p>
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
