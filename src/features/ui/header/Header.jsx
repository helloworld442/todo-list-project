import "./Header.scss";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <nav className="header-nav">
      <span className="header-text">
        <HomeOutlined />
      </span>
      <span className="header-text">
        <LeftOutlined />
      </span>
    </nav>
  );
};

export { Header };
