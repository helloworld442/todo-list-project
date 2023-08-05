import { Link, useNavigate } from "react-router-dom";
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
import { useRecoilState } from "recoil";
import { dateButton } from "../../recoil/atom";

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
  const distances = [0, 52, 107, 163, 222, 280, 338];
  const [index, setIndex] = useRecoilState(dateButton);

  const onToggleButton = (idx) => {
    setIndex(idx);
  };

  return (
    <HeaderDescBox>
      <HeaderDescList>
        {dates.map((date, idx) => (
          <HeaderDescItem key={idx} onClick={() => onToggleButton(idx)}>
            <span className="date-day">{date}</span>
            <span className="date-num">{6 + idx}</span>
          </HeaderDescItem>
        ))}
      </HeaderDescList>
      <HeaderDesToggle distance={distances[index]} />
    </HeaderDescBox>
  );
};

const HeaderNav = () => {
  const navigateTo = useNavigate();

  return (
    <HeaderNavBox>
      <Link onClick={() => navigateTo(-1)}>
        <LeftOutlined />
      </Link>
      <Link to="/">
        <HomeOutlined />
      </Link>
    </HeaderNavBox>
  );
};

Header.Title = HeaderTitle;
Header.Desc = HeaderDescription;
Header.Nav = HeaderNav;

export default Header;
