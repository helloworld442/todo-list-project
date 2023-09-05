import { styled } from "styled-components";

const StButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background: rgb(101, 136, 247);
`;

const Button = (props) => <StButton {...props} />;

export default Button;
