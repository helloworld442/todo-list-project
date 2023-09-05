import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { FooterNav, FooterText } from "./FooterStyle";

const Footer = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
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
    <FooterNav>
      <FooterText>
        <Link to="/">
          <HomeOutlined className={active === 0 ? "active" : ""} />
        </Link>
      </FooterText>
      <FooterText>
        <Link to="/write">
          <PlusOutlined className={active === 1 ? "active" : ""} />
        </Link>
      </FooterText>
      <FooterText>
        <Link to="/chart">
          <LineChartOutlined className={active === 2 ? "active" : ""} />
        </Link>
      </FooterText>
      <FooterText>
        <Link to="/login">
          <UserOutlined className={active === 3 ? "active" : ""} />
        </Link>
      </FooterText>
    </FooterNav>
  );
};

export { Footer };
