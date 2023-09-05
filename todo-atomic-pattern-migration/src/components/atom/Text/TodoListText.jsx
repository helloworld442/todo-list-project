import { css, styled } from "styled-components";

export const TodoListIconText = styled.span`
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: ${(props) => props.color};
  transform: translateY(-50%);
`;

export const TodoListTitleText = styled.span`
  position: absolute;
  top: 50%;
  left: 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  transform: translateY(-50%);
  ${(props) =>
    props.$active &&
    css`
      text-decoration: solid line-through #aaa 2px;
      color: #aaa;
    `}
`;
