import { useRecoilState } from "recoil";
import { dateButton } from "../../recoil/atom";
import {
  HeaderCol,
  HeaderDesToggle,
  HeaderDescBox,
  HeaderDescItem,
  HeaderDescList,
  HeaderTitleBox,
  HeaderTitleText,
} from "./style";

const dates = ["S", "M", "T", "W", "T", "F", "S"];
const distances = [-2, 53, 108, 163, 222, 280, 338];

const HeaderContainer = () => {
  const [number, setNumber] = useRecoilState(dateButton);

  const onToggleButton = (idx) => setNumber(idx);

  return (
    <HeaderCol>
      <HeaderTitle />
      <HeaderDescription number={number} onCount={onToggleButton} />
    </HeaderCol>
  );
};

const HeaderTitle = () => {
  return (
    <HeaderTitleBox>
      <HeaderTitleText size="small">Friday, May 11</HeaderTitleText>
      <HeaderTitleText size="large">To-Do List</HeaderTitleText>
    </HeaderTitleBox>
  );
};

const HeaderDescription = ({ number, onCount }) => {
  return (
    <HeaderDescBox>
      <HeaderDescList>
        {dates.map((date, idx) => (
          <HeaderDescItem key={idx} onClick={() => onCount(idx)}>
            <span className="date-day">{date}</span>
            <span className="date-num">{6 + idx}</span>
          </HeaderDescItem>
        ))}
      </HeaderDescList>
      <HeaderDesToggle distance={distances[number]} />
    </HeaderDescBox>
  );
};

export default HeaderContainer;
