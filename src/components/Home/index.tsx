import {
  LitDeck,
  Container,
  NavOptions,
  StageSelector,
} from "../../components";
import { useEffect } from "react";
import { useStage } from "../../contexts/StageContext";

export function Home() {
  const { stage, choosing, setChoosing } = useStage();

  useEffect(() => {
    setChoosing(false);
  }, [stage]);

  return (
    <Container>
      <>
        {choosing ? <StageSelector /> : <LitDeck />}
        <NavOptions />
      </>
    </Container>
  );
}
