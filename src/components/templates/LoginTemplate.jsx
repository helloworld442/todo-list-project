import { styled } from "styled-components";
import LoginOrganism from "../organisms/AuthOrganism/LoginOrganism";
import FooterOrganism from "../organisms/FooterOrganism";
import HeaderOrganism from "../organisms/HeaderOrganism";

const LoginTemplate = () => {
  return (
    <LoginLayout>
      <LoginCol>
        <HeaderOrganism />
        <LoginOrganism />
        <FooterOrganism />
      </LoginCol>
    </LoginLayout>
  );
};

const LoginLayout = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const LoginCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LoginTemplate;
