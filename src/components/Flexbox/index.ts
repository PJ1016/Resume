import styled from "styled-components";
interface IFlexBox {
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  flexDirection: string;
}
export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  align-items: ${(props) => props.alignItems || "left"};
  justify-content: ${(props) => props.justifyContent || "left"};
  width: ${(props) => props.width || "inherit"};
  height: ${(props) => props.height || "inherit"};
  flex-direction: ${(props) => props.flexDirection || "row"};
`;
