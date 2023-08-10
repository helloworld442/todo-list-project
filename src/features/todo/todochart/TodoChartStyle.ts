import styled from "styled-components";

export const TodoChartBox = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  overflow-y: scroll;
`;

export const TodoBarChartBox = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  svg {
    border: 5px solid ${(props) => props.theme.baseColor};
    border-radius: 15px;
    box-sizing: border-box;
  }

  .x-axis {
    font-size: 0.8rem;
  }

  .y-axis {
    font-size: 0.8rem;
  }

  .domain {
    stroke-width: 2;
    stroke: #888;
  }

  .bar {
    stroke: rgb(101, 136, 247);
    stroke-opacity: 1;
    stroke-linecap: round;
    stroke-width: 5;
    stroke-dasharray: 0;
    fill: rgb(101, 136, 247, 0.5);
    fill-opacity: 1;
  }

  .bar-text {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const TodoLineChartBox = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  svg {
    border: 5px solid ${(props) => props.theme.baseColor};
    border-radius: 15px;
    box-sizing: border-box;
  }

  .x-axis {
    font-size: 0.8rem;
  }

  .y-axis {
    font-size: 0.8rem;
  }

  .domain {
    stroke-width: 2;
    stroke: #888;
  }
`;
