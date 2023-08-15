import { memo } from "react";
import "./Input.scss";
import classNames from "classnames";

const inputDict = {
  title: "TITLE",
  email: "EMAIL",
  username: "USERNAME",
  password: "PASSWORD",
};

const Input = memo(({ type, name, value, error, onChange }) => {
  return (
    <div className="input-box">
      <label className="input-label">{inputDict[name]}</label>
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
});

export { Input };
