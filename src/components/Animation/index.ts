import styled, { keyframes } from "styled-components";
export const fadeDown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const Animation = styled.span`
  animation: ${fadeDown} 5s;
`;
