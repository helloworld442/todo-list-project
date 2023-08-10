import styled from "styled-components";

export const TodoChartBox = styled.div`
  width: 100%;
  max-height: 650px;
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const TodoBarChartBox = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  svg {
    border: 3px solid ${(props) => props.theme.baseColor};
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
    border: 3px solid ${(props) => props.theme.baseColor};
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

export const TodoChartDescBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 36px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TodoChartDescProfile = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 24px;
  border-radius: 100%;
  background: #d3d3d3;
`;

export const TodoChartDescContent = styled.div`
  display: flex;
  flex-direction: column;
  #profile-name {
    margin-top: 6px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #888;
    span {
      font-size: 1.2rem;
      color: #333;
    }
  }

  #profile-max {
    margin-top: 12px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #888;
    span {
      font-size: 1rem;
      color: ${(props) => props.theme.baseColor};
    }
  }

  #profile-min {
    margin-top: 12px;
    font-size: 0.8rem;
    font-weight: bold;
    color: #888;
    span {
      font-size: 1rem;
      color: tomato;
    }
  }
`;
