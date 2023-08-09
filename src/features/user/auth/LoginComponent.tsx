import { Button, InputBox } from "../../ui";
import { LoginProps } from "./AuthInterface";
import { AuthButtonLink, AuthCol, AuthForm } from "./AuthStyle";

const LoginComponent = ({ form, errors, onInput, onSubmit }: LoginProps) => {
  return (
    <AuthCol>
      <AuthForm onSubmit={onSubmit}>
        <InputBox
          type="text"
          name="username"
          value={form.username}
          error={errors.username}
          onChange={onInput}
        />
        <InputBox
          type="text"
          name="password"
          value={form.password}
          error={errors.password}
          onChange={onInput}
        />
        <Button>SIGN IN</Button>
      </AuthForm>
      <AuthButtonLink to="/register">회원가입 페이지</AuthButtonLink>
    </AuthCol>
  );
};

export default LoginComponent;
