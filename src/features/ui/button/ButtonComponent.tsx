import { memo } from "react";
import { ButtonProps } from "./ButtonInterface";
import { StButton } from "./ButtonStyle";

const Button = memo((props: ButtonProps) => <StButton {...props} />);

export { Button };
