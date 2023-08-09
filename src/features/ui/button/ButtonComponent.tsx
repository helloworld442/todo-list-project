import { ButtonProps } from "./ButtonInterface";
import { StButton } from "./ButtonStyle";

const Button = (props: ButtonProps) => <StButton {...props} />;

Button.defaultProps = {
  width: "100%",
  height: "50px",
};

export { Button };
