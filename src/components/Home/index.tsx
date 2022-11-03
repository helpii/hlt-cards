import lits from "../../lib/lits";
import { useState } from "react";

export function Home() {
  const [litIndex, setLitIndex] = useState(0);
  return (
    <>
      {/*GradientBG //use custom styling with classnames*/}
      <div className="transition-colors flex flex-col justify-center items-center bg-nlw-gradient h-[100vh] w-[100%]">
        {/*LitCard*/}
        <div>
          <h1>{lits[litIndex].author}</h1>
          <h1>{litIndex}</h1>
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
          {/*ClassPlanButton*/}
          <a href={lits[litIndex].classPlanUrl} target="blank">
            plano de aula
          </a>
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
