import styled, { css } from "styled-components";
import { InputBoxProps } from "./InputInterface";

export const InputBoxStyle = styled.div`
  width: 100%;
  height: 80px;
  padding-bottom: 24px;
`;

export const InputStyle = styled.input<InputBoxProps>`
  width: 100%;
  height: 50px;
  padding: 12px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 8px;
  outline: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
      border-radius: 8px;
      box-sizing: border-box;
    `}
`;

export const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #aaa;
`;

export const InputErrorText = styled.span`
  font-size: 0.8rem;
  font-weight: 550;
  color: red;
`;
