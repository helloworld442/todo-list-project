import styled, { css } from "styled-components";
import { SelectErrorProps } from "./SelectInterface";

export const DropDownBox = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding-bottom: 24px;
`;

export const DropDownLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #aaa;
`;

export const DropDownTrigger = styled.div<SelectErrorProps>`
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
  cursor: pointer;

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
      border-radius: 8px;
      box-sizing: border-box;
    `}
`;

export const DropDownMenu = styled.ul`
  position: absolute;
  width: 100%;
  padding: 12px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  z-index: 100;
`;

export const DropDownItem = styled.li`
  width: 100px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const DropDownBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #d3d3d3;
  z-index: 100;
  opacity: 0.2;
`;

export const DropDownErrorText = styled.span`
  position: absolute;
  bottom: 6px;
  left: 0;
  font-size: 0.8rem;
  font-weight: 550;
  color: red;
`;
