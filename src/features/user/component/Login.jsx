import "./Login.scss";
import { Button, Input } from "../../ui";

const Login = () => {
  return (
    <form className="login-form">
      <Input />
      <Input />
      <Button>SIGN IN</Button>
    </form>
  );
};

export { Login };
