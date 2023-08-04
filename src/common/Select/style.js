import { css, styled } from "styled-components";

export const DropDownBox = styled.div`
  width: 100%;
  padding: 24px 0;
`;

export const DropDownLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;
`;

export const DropDownTrigger = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: bold;
`;

export const DropDownList = styled.ul`
  position: relative;
  width: 100%;
  min-height: 50px;
  padding: 12px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
      border-radius: 8px;
      box-sizing: border-box;
    `}
`;

export const DropDownItem = styled.li`
  width: 100px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const DropDownErrorText = styled.span`
  font-size: 0.8rem;
  font-weight: 550;
  color: red;
`;
