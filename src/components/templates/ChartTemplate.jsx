import { styled } from "styled-components";
import FooterOrganism from "../organisms/FooterOrganism";
import HeaderOrganism from "../organisms/HeaderOrganism";
import * as TodoChartOrganism from "../organisms/TodoOrganism/TodoChartOrganism";

const ChartTemplate = () => {
  return (
    <ChartLayout>
      <ChartCol>
        <HeaderOrganism />
        <TodoChartOrganism.Line />
        <TodoChartOrganism.Bar />
        <FooterOrganism />
      </ChartCol>
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const ChartCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default ChartTemplate;
