import { AuthButtonLink, AuthCol, AuthForm } from "./auth.style";
import { InputBox, Button } from "../../ui";

const typeDict = {
  login: "SIGN IN",
  register: "SIGN UP",
};

const locationDict = {
  login: "/register",
  register: "/login",
};

const textDict = {
  login: "회원가입 페이지 ",
  register: "로그인 페이지",
};

const Auth = ({ type, form, errors, onInput, onSubmit }) => {
  return (
    <AuthCol>
      <AuthForm onSubmit={onSubmit}>
        {type === "register" && (
          <>
            <InputBox
              type="text"
              name="email"
              form={form.email}
              error={errors.email}
              onChange={onInput}
            />
          </>
        )}
        <InputBox
          type="text"
          name="username"
          value={form.username}
          error={errors.username}
          onChange={onInput}
        />
        <InputBox
          type="password"
          name="password"
          value={form.password}
          error={errors.password}
          onChange={onInput}
        />
        <Button>{typeDict[type]}</Button>
      </AuthForm>
      <AuthButtonLink href={locationDict[type]}>{textDict[type]}</AuthButtonLink>
    </AuthCol>
  );
};

export default Auth;
