import { Link } from "react-router-dom";
import { styled } from "styled-components";

const FooterContainer = ({ icon, location }) => {
  return (
    <FooterBox>
      <Link to={location}>
        <FooterToggleIcon>{icon}</FooterToggleIcon>
      </Link>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  padding: 50px 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterToggleIcon = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background: rgb(101, 136, 247);
  color: #fff;
`;

export default FooterContainer;
