import { styled } from "styled-components";

export const TodoChartBox = styled.div`
  width: 100%;
  height: 650px;
  padding: 20px;
  padding-bottom: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 36px;
  overflow-y: scroll;
  @media screen and (max-width: 768px) {
    height: 700px;
  }
`;

export const TodoLineChartBox = styled.div`
  position: relative;
  border: 5px solid #6588f7;
  border-radius: 15px;
`;

export const TodoBarChartBox = styled.div`
  position: relative;
  border: 5px solid #6588f7;
  border-radius: 15px;
`;

export const TodoRadarChartBox = styled.div`
  position: relative;
  border: 5px solid #6588f7;
  border-radius: 15px;
`;

export const TodoChartText = styled.span`
  position: absolute;
  top: -24px;
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;
`;
