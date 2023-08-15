import "./Register.scss";
import { Button, Input } from "../../ui";

const Register = () => {
  return (
    <form className="register-form">
      <Input />
      <Input />
      <Input />
      <Button>SIGN UP</Button>
    </form>
  );
};

export { Register };
