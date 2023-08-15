import "./Footer.scss";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <nav className="footer-nav">
      <Link className="footer-link active">
        <HomeOutlined />
      </Link>
      <Link className="footer-link">
        <PlusOutlined />
      </Link>
      <Link className="footer-link">
        <LineChartOutlined />
      </Link>
      <Link className="footer-link">
        <UserOutlined />
      </Link>
    </nav>
  );
};

export { Footer };
