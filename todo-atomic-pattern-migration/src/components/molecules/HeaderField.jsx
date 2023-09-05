import { styled } from "styled-components";
import { HeaderLeftText, HeaderRightText } from "../atom/Text/HeaderText";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";

const HeaderField = ({ goBackButton, goHomeButton }) => {
  return (
    <HeaderFieldBox>
      <HeaderLeftText onClick={goBackButton}>
        <LeftOutlined />
      </HeaderLeftText>
      <HeaderRightText onClick={goHomeButton}>
        <HomeOutlined />
      </HeaderRightText>
    </HeaderFieldBox>
  );
};

const HeaderFieldBox = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderField;
