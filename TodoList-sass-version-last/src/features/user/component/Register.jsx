import "./Register.scss";
import { Button, Input } from "../../ui";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [errors, setErrors] = useState({ email: "", username: "", password: "" });

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (username.trim() === "") return "유저 이름을 입력해주세요";
    if (!usernameRegex.test(username)) return "유저 이름의 형식을 지켜주세요";
    if (username.length > 15) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    if (username.length < 5) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") return "이메일를 입력해주세요";
    if (!emailRegex.test(email)) return "이메일의 형식을 지켜주세요";
    if (email.length > 30) return "이메일의 길이는 (10~30)자로 맞춰주세요";
    if (email.length < 10) return "이메일의 길이는 (10~30)자로 맞춰주세요";
    return "";
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
    if (password.trim() === "") return "비밀번호을 입력해주세요";
    if (!passwordRegex.test(password)) return "비밀번호 형식을 지켜주세요";
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
    const emailError = validateEmail(form.email);

    if (usernameError || passwordError || emailError) {
      setErrors({
        email: emailError,
        username: usernameError,
        password: passwordError,
      });
      return;
    }
  };

  return (
    <form className="register-form" onSubmit={onSubmitInput}>
      <Input
        type="text"
        name="email"
        value={form.email}
        error={errors.email}
        onChange={onChangeInput}
      />
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
      <Button>SIGN UP</Button>
      <Link to="/signin" className="register-footer">
        로그인 페이지
      </Link>
    </form>
  );
};

export { Register };
