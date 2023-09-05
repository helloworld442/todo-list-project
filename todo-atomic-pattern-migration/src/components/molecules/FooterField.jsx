import { styled } from "styled-components";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { FooterAnchor } from "../atom/Anchor/FooterAnchor";

const FooterField = ({ active }) => {
  return (
    <FooterFieldStyle>
      <FooterAnchor to="/">
        <HomeOutlined className={active === 0 ? "active" : ""} />
      </FooterAnchor>
      <FooterAnchor to="/write">
        <PlusOutlined className={active === 1 ? "active" : ""} />
      </FooterAnchor>
      <FooterAnchor to="/chart">
        <LineChartOutlined className={active === 2 ? "active" : ""} />
      </FooterAnchor>
      <FooterAnchor to="/login">
        <UserOutlined className={active === 3 ? "active" : ""} />
      </FooterAnchor>
    </FooterFieldStyle>
  );
};

const FooterFieldStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default FooterField;
