import styled, { css } from "styled-components";

export const TodoListCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoListTitleBox = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const TodoListTitleText = styled.span`
  ${(props) =>
    props.size === "small" &&
    css`
      margin-bottom: 14px;
      display: block;
      font-size: 1rem;
      font-weight: 800;
      color: #aaa;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      display: block;
      font-size: 2.7rem;
      font-weight: 800;
      color: #333;
    `}
`;

export const TodoListToggleMenu = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 24px 35px -24px rgba(211, 211, 211, 0.98);
`;

export const TodoListToggleItem = styled.li`
  position: relative;
  width: 24px;
  height: 100%;
  text-align: center;
  cursor: pointer;
  .day-date {
    padding-bottom: 16px;
    display: block;
    font-size: 0.925rem;
    font-weight: 800;
    color: #aaa;
  }
  .day-num {
    display: block;
    font-size: 1.05rem;
    font-weight: bold;
    color: #333;
  }
`;

export const TodoListToggleIcon = styled.div`
  position: absolute;
  bottom: -28px;
  left: 5.5px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: rgb(101, 136, 247);
`;

export const TodoListMenuStyle = styled.ul`
  width: 100%;
  height: 400px;
  padding: 0 20px;
  padding-top: 50px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const TodoListItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 50px;
  padding-bottom: 24px;
`;

export const TodoListItemIcon = styled.div`
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: ${(props) => props.color};
  transform: translateY(-50%);
`;

export const TodoListItemText = styled.span`
  position: absolute;
  top: 50%;
  left: 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  transform: translateY(-50%);
  ${(props) =>
    props.active &&
    css`
      text-decoration: solid line-through #aaa 2px;
      color: #aaa;
    `}
`;

export const TodoListItemCheckBox = styled.input.attrs({ type: "checkbox" })`
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
