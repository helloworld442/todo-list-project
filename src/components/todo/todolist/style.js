import { css, styled } from "styled-components";

export const StTodoList = styled.ul`
  width: 100%;
  height: 400px;
  padding: 0 20px;
  padding-top: 50px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const StTodoItem = styled.li`
  position: relative;
  width: 100%;
  height: 50px;
  padding-bottom: 24px;
`;

export const TodoItemIcon = styled.div`
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: ${(props) => props.color};
  transform: translateY(-50%);
`;

export const TodoItemText = styled.div`
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

export const TodoItemCheckBox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  width: 16px;
  height: 16px;
  border: 2px solid #aaa;
  transform: translateY(-75%);
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: rgb(101, 136, 247);
  }
`;
