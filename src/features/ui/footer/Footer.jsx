import "./Footer.scss";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <nav className="footer-nav">
      <span className="footer-text active">
        <HomeOutlined />
      </span>
      <span className="footer-text">
        <PlusOutlined />
      </span>
      <span className="footer-text">
        <LineChartOutlined />
      </span>
      <span className="footer-text">
        <UserOutlined />
      </span>
    </nav>
  );
};

export { Footer };
