import { useCallback, useState } from "react";
import RegisterComponent from "./RegisterComponent";

const RegisterContainer = () => {
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });

  const validateUsername = (username: string) => {
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (username.trim() === "") return "유저 이름을 입력해주세요";
    if (!usernameRegex.test(username)) return "유저 이름의 형식을 지켜주세요";
    if (username.length > 15) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    if (username.length < 5) return "유저 이름의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") return "이메일를 입력해주세요";
    if (!emailRegex.test(email)) return "이메일의 형식을 지켜주세요";
    if (email.length > 30) return "이메일의 길이는 (10~30)자로 맞춰주세요";
    if (email.length < 10) return "이메일의 길이는 (10~30)자로 맞춰주세요";
    return "";
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/;
    if (password.trim() === "") return "비밀번호을 입력해주세요";
    if (!passwordRegex.test(password)) return "비밀번호 형식을 지켜주세요";
    if (password.length > 15) return "비밀번호의 길이는 (5~15)자로 맞춰주세요";
    if (password.length < 5) return "비밀번호의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onSubmitInput = (e: React.FormEvent<HTMLFormElement>) => {
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
    <RegisterComponent
      form={form}
      errors={errors}
      onInput={onChangeInput}
      onSubmit={onSubmitInput}
    />
  );
};

export { RegisterContainer };
