import { styled } from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

const Footer = ({ children }) => {
  console.log("hello wor1d");
  return (
    <FooterBox>
      <a href="/write">{children}</a>
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

const FooterToggleIcon = styled(PlusOutlined)`
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

Footer.Icon = FooterToggleIcon;

export default Footer;
