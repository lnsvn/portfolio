import { styled, keyframes } from "styled-components";
import { slideInLeft } from "react-animations";

const SlideRight = styled.div`
  animation: 1s ${keyframes`${slideInLeft}`};
`;

export default SlideRight;
