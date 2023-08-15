import "./Login.scss";
import { Button, Input } from "../../ui";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
    <form className="login-form" onSubmit={onSubmitInput}>
      <Input
        type="text"
        name="username"
        value={form.username}
        error={errors.username}
        onChange={onChangeInput}
      />
      <Input
        type="password"
        name="password"
        value={form.password}
        error={errors.password}
        onChange={onChangeInput}
      />
      <Button>SIGN IN</Button>
      <Link to="/signin" className="login-footer">
        회원가입 페이지
      </Link>
    </form>
  );
};

export { Login };
