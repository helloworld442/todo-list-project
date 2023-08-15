import classNames from "classnames";
import "./Select.scss";

const selectDict = {
  color: "COLOR",
  day: "DAY",
};

const Select = ({ name, options, value, error, onChange }) => {
  return (
    <div className="select-box">
      <label className="select-label">{selectDict[name]}</label>
      <span className={classNames("select-trigger", { error })}>{value || "chose options"}</span>
      <ul className="select-list">
        <li className="select-item"></li>
      </ul>
      <span className="select-error">{error}</span>
    </div>
  );
};

export { Select };
