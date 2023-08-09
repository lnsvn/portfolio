import { styled, keyframes } from "styled-components";
import { pulse } from "react-animations";

const Pulse = styled.div`
  animation: 1s ${keyframes`${pulse}`} infinite;
`;

export default Pulse;
