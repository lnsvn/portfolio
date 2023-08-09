import { styled, keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

export default FadeIn;
