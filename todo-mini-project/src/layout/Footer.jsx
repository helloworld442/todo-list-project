import { styled } from "styled-components";
import { HomeOutlined, LineChartOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
`;

const FooterList = styled.ul`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterItem = styled.li`
  font-size: 1.8rem;
  color: #888;
  &:hover {
    color: rgb(101, 136, 247);
  }
  .active {
    transition: all 0.3s ease-in-out;
    transform: translateY(-14px);
    padding: 8px;
    border-radius: 100%;
    color: #fff;
    background: rgb(101, 136, 247);
  }
`;

export default Footer;
