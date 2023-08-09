import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
}

const Button = (props: ButtonProps) => <StButton {...props} />;

const StButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 1.3rem;
  font-weight: 850;
  color: #fff;
  background: ${(props) => props.theme.baseColor};
`;

Button.defaultProps = {
  width: "100%",
  height: "50px",
};

export { Button };
