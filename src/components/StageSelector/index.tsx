import { useStage } from "../../contexts/StageContext";
import { FireSimple, HandPalm, Robot, Rocket } from "phosphor-react";

export function StageSelector() {
  const { setStage } = useStage();
  return (
    <div className="max-w-[90%] w-[401px] p-2 h-[500px] max-h-[80vh] mb-4 flex flex-col justify-center ">
      {/*Lower Card Section*/}
      <div className="flex flex-row text-white text-2xl font-black gap-8 mb-4">
        <p className="">leve-me a um palco</p>
        <p className="rotate-90 font-semibold">:)</p>
      </div>
      <div className="py-1 px-4 rounded-2xl flex flex-col font-semibold text-sm text-helplit2 items-start gap-2">
        <>
          <div
            onClick={() => setStage("HELPLIT")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-helplit2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <FireSimple size={22} weight="bold" />
            <p>Festival</p>
          </div>
          <div
            onClick={() => setStage("APR_LUD")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-aprenlud2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <Rocket size={22} weight="bold" />
            <p>Aprendizagem Lúdica</p>
          </div>
          <div
            onClick={() => setStage("PEN_COM")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-pencomput2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <Robot size={22} weight="bold" />
            <p>Pensamento Computacional</p>
          </div>
          <div
            onClick={() => setStage("SAL_INV")}
            className="bg-white rounded-full py-1 px-2 gap-1 text-salainv2 flex flex-row hover:opacity-90 cursor-pointer"
          >
            <HandPalm size={22} weight="bold" />
            <p>Sala Invertida</p>
          </div>
        </>
      </div>
      <div></div>
    </div>
  );
}
