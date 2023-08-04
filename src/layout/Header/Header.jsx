import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HeaderCol,
  HeaderDesToggle,
  HeaderDescBox,
  HeaderDescItem,
  HeaderDescList,
  HeaderNavBox,
  HeaderTitleBox,
  HeaderTitleText,
} from "./style";
import { HomeOutlined, LeftOutlined } from "@ant-design/icons";

const Header = ({ children }) => {
  return <HeaderCol>{children}</HeaderCol>;
};

const HeaderTitle = () => {
  return (
    <HeaderTitleBox>
      <HeaderTitleText size="small">Friday, May 11</HeaderTitleText>
      <HeaderTitleText size="large">To-Do List</HeaderTitleText>
    </HeaderTitleBox>
  );
};

const HeaderDescription = () => {
  const dates = ["S", "M", "T", "W", "T", "F", "S"];
  const [position, setPosition] = useState({ left: 0 });

  const onMoveButton = (e) => {
    const buttonRect = e.target.getBoundingClientRect();
    setPosition({ left: buttonRect.right });
  };

  return (
    <HeaderDescBox>
      <HeaderDescList>
        {dates.map((date, idx) => (
          <HeaderDescItem key={idx} onClick={onMoveButton}>
            <span className="date-day">{date}</span>
            <span className="date-num">{6 + idx}</span>
          </HeaderDescItem>
        ))}
      </HeaderDescList>
      <HeaderDesToggle position={position} />
    </HeaderDescBox>
  );
};

const HeaderNav = () => {
  return (
    <HeaderNavBox>
      <Link to="/">
        <LeftOutlined />
      </Link>
      <Link onClick={() => window.history.back()}>
        <HomeOutlined />
      </Link>
    </HeaderNavBox>
  );
};

Header.Title = HeaderTitle;
Header.Desc = HeaderDescription;
Header.Nav = HeaderNav;

export default Header;
