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
    case "ABPJ":
      return "Aprendizagem Baseada em Projetos";
    case "ABPB":
      return "Aprendizagem Baseada em Problemas";
    case "CASO":
      return "Casos";
    case "ROTA":
      return "Rotação por Estações";
    case "ROLE":
      return "RolePlay";
    case "PESQ":
      return "Pesquisa";
    case "DEBA":
      return "Debate";
    case "SEMI":
      return "Seminário";
    case "PCAM":
      return "Prática de Campo";
    case "PVID":
      return "Projeto de Vida";
    default:
      break;
  }
}
