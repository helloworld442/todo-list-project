import { styled } from "styled-components";
import { useCallback, useState } from "react";
import { AuthFooterAnchor } from "../../atom/Anchor/AuthFooterAnchor";
import { AuthWriteField } from "../../molecules/AuthField/AuthWriteField";
import { AuthWriteButton } from "../../atom/Button/AuthWriteButton";

const LoginOrganism = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateUsername = (username) => {
    if (username.trim() === "") return "유저 이름을 입력해주세요";
    if (username.length > 15) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    if (username.length < 5) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validatePassword = (password) => {
    if (password.trim() === "") return "비밀번호을 입력해주세요";
    if (password.length > 15) return "비밀번호의 길이는 (5~15)자로 맞춰주세요";
    if (password.length < 5) return "비밀번호의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onSubmitInput = (e) => {
    e.preventDefault();
    const usernameError = validateUsername(form.username);
    const passwordError = validatePassword(form.password);

    if (usernameError || passwordError) {
      setErrors({
        username: usernameError,
        password: passwordError,
      });
      return;
    }
  };

  return (
    <LoginOrganismStyle onSubmit={onSubmitInput}>
      <AuthWriteField
        type="text"
        name="username"
        value={form.username}
        error={errors.username}
        onChange={onChangeInput}
      />
      <AuthWriteField
        type="text"
        name="password"
        value={form.password}
        error={errors.password}
        onChange={onChangeInput}
      />
      <AuthWriteButton>SIGN IN</AuthWriteButton>
      <AuthFooterAnchor to="/register">회원가입 페이지</AuthFooterAnchor>
    </LoginOrganismStyle>
  );
};

const LoginOrganismStyle = styled.form`
  width: 100%;
  height: 600px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export default LoginOrganism;
