import { memo, useState } from "react";
import {
  DropDownBox,
  DropDownErrorText,
  DropDownItem,
  DropDownLabel,
  DropDownList,
  DropDownTrigger,
} from "./SelectStyle";

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

const Select = memo(({ name, options, value, error, onChange }) => {
  const [active, setActive] = useState(false);

  const onToggleSelect = () => {
    setActive(true);
  };

  const onClickSelect = (option) => {
    onChange({ name, value: option });
    setActive(false);
  };

  return (
    <DropDownBox>
      <DropDownLabel>{selectDict[name]}</DropDownLabel>
      <DropDownList error={error}>
        <DropDownTrigger onClick={onToggleSelect}>
          {active ? null : value || "옵션을 선택해 주세요"}
        </DropDownTrigger>
        {active &&
          options.map((option, idx) => (
            <DropDownItem key={idx} onClick={() => onClickSelect(option)}>
              {option}
            </DropDownItem>
          ))}
      </DropDownList>
      <DropDownErrorText>{error}</DropDownErrorText>
    </DropDownBox>
  );
});

export { Select };
