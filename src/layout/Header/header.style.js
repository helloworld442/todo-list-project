import { css, styled } from "styled-components";

export const HeaderCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitleBox = styled.div`
  width: 100%;
  height: 180px;
  padding: 0 20px;
  padding-top: 100px;
  box-sizing: border-box;
`;

export const HeaderTitleText = styled.span`
  ${(props) =>
    props.size === "small" &&
    css`
      margin-bottom: 14px;
      display: block;
      font-size: 1rem;
      font-weight: bold;
      color: #888;
    `}
  ${(props) =>
    props.size === "large" &&
    css`
      display: block;
      font-size: 2.6rem;
      font-weight: 900;
      color: #888;
    `}
`;

export const HeaderDescBox = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  padding: 0 20px;
  padding-top: 50px;
  box-sizing: border-box;
  box-shadow: 0px 24px 35px -24px rgba(211, 211, 211, 0.98);
`;

export const HeaderDescList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderDescItem = styled.li`
  cursor: pointer;
  text-align: center;
  .date-day {
    padding-bottom: 20px;
    display: block;
    font-size: 0.825rem;
    font-weight: bold;
    color: #aaa;
  }
  .date-num {
    display: block;
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }
`;

export const HeaderDesToggle = styled.div`
  position: absolute;
  bottom: -8px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: rgb(101, 136, 247);
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => props.distance}px);
`;

export const HeaderNavBox = styled.div`
  width: 100%;
  padding: 24px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  color: #aaa;
  a {
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    color: rgb(101, 136, 247);
  }
`;
