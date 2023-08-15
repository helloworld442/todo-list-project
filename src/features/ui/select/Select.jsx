import "./Select.scss";
import classNames from "classnames";
import { useState } from "react";

const selectDict = {
  color: "COLOR",
  day: "DAY",
};

const Select = ({ name, options, value, error, onChange }) => {
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
          <li className="select-item" onClick={() => onDownSelect()}></li>
        </ul>
      )}
      <span className="select-error">{error}</span>
    </div>
  );
};

export { Select };
