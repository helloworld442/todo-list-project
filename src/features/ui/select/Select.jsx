import "./Select.scss";
import classNames from "classnames";
import { memo, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => {
    setIsOpen(true);
    onChange({ name, value: "" });
  };

  const onDownSelect = (option) => {
    setIsOpen(false);
    onChange({ name, value: option });
  };

  return (
    <div className="select-box">
      <label className="select-label">{selectDict[name]}</label>
      <span className={classNames("select-trigger", { error })} onClick={onOpenSelect}>
        {value || "chose options"}
      </span>
      {isOpen && (
        <ul className="select-list">
          {options.map((option, index) => (
            <li key={index} className="select-item" onClick={() => onDownSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      <span className="select-error">{error}</span>
    </div>
  );
});

export { Select };
