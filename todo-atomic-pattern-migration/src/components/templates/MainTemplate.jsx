import { styled } from "styled-components";
import HeaderOrganism from "../organisms/HeaderOrganism";
import TodoTitleOrganism from "../organisms/TodoOrganism/TodoTitleOrganism";
import TodoDateOrganism from "../organisms/TodoOrganism/TodoDateOrganism";
import TodoListOrganism from "../organisms/TodoOrganism/TodoListOrganism";
import FooterOrganism from "../organisms/FooterOrganism";

const MainTemplate = () => {
  return (
    <MainLayout>
      <MainCol>
        <HeaderOrganism />
        <TodoTitleOrganism />
        <TodoDateOrganism />
        <TodoListOrganism />
        <FooterOrganism />
      </MainCol>
    </MainLayout>
  );
};

const MainLayout = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const MainCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainTemplate;
