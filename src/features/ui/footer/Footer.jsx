import "./Footer.scss";
import classNames from "classnames";
import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

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
  }, [pathname]);

  return (
    <nav className="footer-nav">
      <Link to="/" className={classNames("footer-link", { active: active === 0 })}>
        <HomeOutlined />
      </Link>
      <Link to="/write" className={classNames("footer-link", { active: active === 1 })}>
        <PlusOutlined />
      </Link>
      <Link to="/chart" className={classNames("footer-link", { active: active === 2 })}>
        <LineChartOutlined />
      </Link>
      <Link to="/login" className={classNames("footer-link", { active: active === 3 })}>
        <UserOutlined />
      </Link>
    </nav>
  );
};

export { Footer };
