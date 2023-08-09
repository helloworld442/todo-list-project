import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthCol = styled.div`
  width: 100%;
  height: 600px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthForm = styled.form`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const AuthButtonLink = styled(Link)`
  padding-top: 24px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgb(101, 136, 247);
  }
`;
