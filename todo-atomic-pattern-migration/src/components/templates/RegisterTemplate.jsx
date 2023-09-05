import { styled } from "styled-components";
import RegisterOrganism from "../organisms/AuthOrganism/RegisterOrganism";
import FooterOrganism from "../organisms/FooterOrganism";
import HeaderOrganism from "../organisms/HeaderOrganism";

const RegisterTemplate = () => {
  return (
    <RegisterLayout>
      <RegisterCol>
        <HeaderOrganism />
        <RegisterOrganism />
        <FooterOrganism />
      </RegisterCol>
    </RegisterLayout>
  );
};

const RegisterLayout = styled.div`
  position: relative;
  width: 393px;
  height: 100vh;
  margin: 0 auto;
  background: #fff;
`;

const RegisterCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RegisterTemplate;
