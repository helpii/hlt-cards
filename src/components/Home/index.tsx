import lits from "../../lib/lits";

export function Home() {
  return (
    <div className="max-w-[1344px] flex flex-col justify-center items-center bg-nlw-gradient h-[100vh] w-[100%]">
      {/*GradientBG*/}
      <h1>{lits[0].author}</h1>
    </div>
  );
}
