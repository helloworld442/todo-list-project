import { Button, InputBox } from "../../ui";
import { RegisterProps } from "./AuthInterface";
import { AuthButtonLink, AuthCol, AuthForm } from "./AuthStyle";

const RegisterComponent = ({ form, errors, onInput, onSubmit }: RegisterProps) => {
  return (
    <AuthCol>
      <AuthForm onSubmit={onSubmit}>
        <InputBox
          type="text"
          name="email"
          value={form.email}
          error={errors.email}
          onChange={onInput}
        />
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
        <Button>SIGN UP</Button>
      </AuthForm>
      <AuthButtonLink to="/login">로그인 페이지</AuthButtonLink>
    </AuthCol>
  );
};

export default RegisterComponent;
