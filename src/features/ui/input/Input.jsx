import { memo } from "react";
import "./Input.scss";
import classNames from "classnames";

const inputDict = {
  title: "TITLE",
  email: "EMAIL",
  username: "USERNAME",
  password: "PASSWORD",
};

/**
 * @param {string} type 인풋 타입
 * @param {string} name 인풋 이름
 * @param {string} value 인풋 값
 * @param {string} error 인풋의 값과 관련된 유효성 검사 내용
 * @param {Function} onChange 인풋의 값이 바뀔 때 호출되는 함수
 */

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
