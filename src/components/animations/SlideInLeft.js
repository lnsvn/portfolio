import { styled, keyframes } from "styled-components";
import { slideInRight } from "react-animations";

const SlideLeft = styled.div`
  animation: 1s ${keyframes`${slideInRight}`};
`;

export default SlideLeft;
