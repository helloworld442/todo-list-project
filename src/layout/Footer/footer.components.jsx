import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { FooterBox, FooterItem, FooterList } from "./footer.style";

const Footer = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(null);

  useEffect(() => {
    switch (pathname) {
      case "/":
        return setActive(0);
      case "/write":
        return setActive(1);
      case "/chart":
        return setActive(2);
      case "/login":
        return setActive(3);
      case "/register":
        return setActive(3);
    }
  }, []);

  return (
    <FooterBox>
      <FooterList>
        <FooterItem>
          <Link to="/">
            <HomeOutlined className={active === 0 ? "active" : ""} />
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/write">
            <PlusOutlined className={active === 1 ? "active" : ""} />
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/chart">
            <LineChartOutlined className={active === 2 ? "active" : ""} />
          </Link>
        </FooterItem>
        <FooterItem>
          <Link to="/login">
            <UserOutlined className={active === 3 ? "active" : ""} />
          </Link>
        </FooterItem>
      </FooterList>
    </FooterBox>
  );
};

export { Footer };
