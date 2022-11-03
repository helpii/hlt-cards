import lits from "../../lib/lits";
import shift from "classnames";
import { useState } from "react";
export function Home() {
  const [litIndex, setLitIndex] = useState(0);
  //save lit list index with useState
  return (
    <>
      {/*GradientBG //use custom styling with classnames*/}
      <div className="max-w-[1344px] flex flex-col justify-center items-center bg-nlw-gradient h-[100vh] w-[100%]">
        {/*LitCard*/}
        <h1>{lits[litIndex].author}</h1>
        <h1>{litIndex}</h1>
        {/*PreviousCard*/}
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
        {/*NextCard*/}
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
    </>
  );
}
