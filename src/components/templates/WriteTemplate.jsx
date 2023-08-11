import { styled } from "styled-components";
import FooterOrganism from "../organisms/FooterOrganism";
import HeaderOrganism from "../organisms/HeaderOrganism";
import TodoWriteOrganism from "../organisms/TodoOrganism/TodoWriteOrganism";

const WriteTemplate = () => {
  return (
    <WriteLayout>
      <WriteCol>
        <HeaderOrganism />
        <TodoWriteOrganism />
        <FooterOrganism />
      </WriteCol>
    </WriteLayout>
  );
};

const WriteLayout = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const WriteCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default WriteTemplate;
