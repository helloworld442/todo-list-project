import "./Select.scss";
import classNames from "classnames";
import { memo, useState } from "react";

const selectDict = {
  color: "COLOR",
  date: "DATE",
};

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
