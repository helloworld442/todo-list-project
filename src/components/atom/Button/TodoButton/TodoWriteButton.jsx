import { styled } from "styled-components";

export const TodoWriteButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  background: ${(props) => props.theme.baseColor};
`;
