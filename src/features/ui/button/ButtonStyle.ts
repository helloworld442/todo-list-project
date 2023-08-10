import styled from "styled-components";
import { ButtonProps } from "./ButtonInterface";

export const StButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "50px"};
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 850;
  color: #fff;
  background: ${(props) => props.theme.baseColor};
`;
