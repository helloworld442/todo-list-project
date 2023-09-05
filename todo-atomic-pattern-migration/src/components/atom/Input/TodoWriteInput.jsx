import { css, styled } from "styled-components";

export const TodoWriteInput = styled.input`
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
