import {
  Chats,
  FireSimple,
  HandPalm,
  Lightning,
  Palette,
  Rocket,
  Sword,
  X,
} from "phosphor-react";

export function getStageName(abbreviature: string) {
  switch (abbreviature) {
    case "HELP":
      return "Festival";
    case "ALUD":
      return "Aprendizagem Lúdica";
    case "PCOM":
      return "Pensamento Computacional";
    case "SINV":
      return "Sala Invertida";
    case "DEBA":
      return "Debate";
    case "ROLE":
      return "Role Play";
    case "ABPJ":
      return "Aprendizagem Baseada em Projetos";
    default:
      return "Palco Desconhecido";
  }
}

export function getStageIcon(abbreviature: string) {
  switch (abbreviature) {
    case "HELP":
      return <FireSimple size={22} color="white" weight="bold" />;
    case "ALUD":
      return <Rocket size={22} color="white" weight="bold" />;
    case "PCOM":
      return <Lightning size={22} color="white" weight="bold" />;
    case "SINV":
      return <HandPalm size={22} color="white" weight="bold" />;
    case "DEBA":
      return <Chats size={22} color="white" weight="bold" />;
    case "ROLE":
      return <Sword size={22} color="white" weight="bold" />;
    case "ABPJ":
      return <Palette size={22} color="white" weight="bold" />;
    default:
      return <X size={22} color="white" weight="bold" />;
  }
}
