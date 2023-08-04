import { useRecoilState } from "recoil";
import { dateButton } from "../../recoil/atom";
import { Link } from "react-router-dom";
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
  const distances = [-2, 53, 108, 163, 222, 280, 338];
  const [number, setNumber] = useRecoilState(dateButton);

  const onToggleButton = (idx) => setNumber(idx);

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
      <HeaderDesToggle distance={distances[number]} />
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
