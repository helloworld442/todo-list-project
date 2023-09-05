import { styled } from "styled-components";

export const TodoListCheckBox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #aaa;
  transform: translateY(-50%);
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.baseColor};
  }
`;
