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
      {/* select box 라벨 영역 */}
      <label className="select-label">{selectDict[name]}</label>

      {/* select box 트리거 영역 */}
      <span className={classNames("select-trigger", { error })} onClick={onOpenSelect}>
        {value || "chose options"}
      </span>

      {/* select box 옵션 영역 */}
      {isOpen && (
        <ul className="select-list">
          {options.map((option, index) => (
            <li key={index} className="select-item" onClick={() => onDownSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* selectbox 오류 텍스트 영역 */}
      <span className="select-error">{error}</span>
    </div>
  );
});

export { Select };
