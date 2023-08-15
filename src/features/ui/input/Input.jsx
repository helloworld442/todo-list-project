import "./Input.scss";
import classNames from "classnames";

const Input = ({ type, name, value, error, onChange }) => {
  return (
    <div className="input-box">
      <label className="input-label">{name}</label>
      <input
        className={classNames("input", { error })}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="input-error">{error}</span>
    </div>
  );
};

export { Input };
