import { styled, keyframes } from "styled-components";
import { zoomIn } from "react-animations";

const ZoomIn = styled.div`
  animation: 1.3s ${keyframes`${zoomIn}`};
`;

export default ZoomIn;
