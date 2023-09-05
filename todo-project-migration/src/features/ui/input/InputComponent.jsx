import { memo } from "react";
import { StInput, StInputBox, StInputErrorText, StInputLabel } from "./InputStyle";

const inputDict = {
  title: "TITLE",
  content: "CONTNENT",
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

const InputBox = memo(({ type, name, value, error, onChange }) => {
  return (
    <StInputBox>
      <StInputLabel>{inputDict[name]}</StInputLabel>
      <StInput type={type} name={name} error={error} value={value} onChange={onChange} />
      <StInputErrorText>{error}</StInputErrorText>
    </StInputBox>
  );
});

export { InputBox };
