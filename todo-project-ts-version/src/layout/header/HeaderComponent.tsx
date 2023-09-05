import { useNavigate } from "react-router-dom";
import { HeaderNav, HeaderNavText } from "./HeaderStyle";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";

const Header = () => {
  const navigateTo = useNavigate();

  const goBackButton = () => navigateTo(-1);

  const goHomeButton = () => navigateTo("/");

  return (
    <HeaderNav>
      <HeaderNavText onClick={goBackButton}>
        <LeftOutlined />
      </HeaderNavText>
      <HeaderNavText onClick={goHomeButton}>
        <HomeOutlined />
      </HeaderNavText>
    </HeaderNav>
  );
};

export { Header };
