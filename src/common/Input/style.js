import { css, styled } from "styled-components";

export const StInputBox = styled.div`
  width: 100%;
  padding: 24px 0;
`;

export const StInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
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

export const StInputLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;
`;

export const StInputErrorText = styled.span`
  font-size: 0.8rem;
  font-weight: 550;
  color: red;
`;
