import { useState } from "react";
import {
  DropDownBox,
  DropDownErrorText,
  DropDownIcon,
  DropDownItem,
  DropDownLabel,
  DropDownList,
  DropDownTrigger,
} from "./style";

const selectDict = {
  color: "COLOR",
  date: "DATE",
};

/**
 * @param {string} name 드롭창 이름
 * @param {object} options 드롭창 options들
 * @param {string} value 드롭창 값
 * @param {string} error 드롭창 에러
 * @param {Function} onChange 드롭창의 값이 바뀔 때 호출되는 함수
 */

const Select = ({ name, options, value, error, onChange }) => {
  const [active, setActive] = useState(false);

  const onToggleSelect = (option) => {
    setActive(!active);
    onChange({ name, value: option });
  };

  return (
    <DropDownBox>
      <DropDownLabel>{selectDict[name]}</DropDownLabel>
      <DropDownList error={error}>
        <DropDownTrigger $active={active}>{value}</DropDownTrigger>
        {active &&
          options.map((option, idx) => (
            <DropDownItem key={idx} onClick={() => onToggleSelect(option)}>
              {option}
            </DropDownItem>
          ))}
        <DropDownIcon onClick={() => onToggleSelect(value)}>
          Change
        </DropDownIcon>
      </DropDownList>
      <DropDownErrorText>{error}</DropDownErrorText>
    </DropDownBox>
  );
};

export default Select;
