import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const AuthFooterAnchor = styled(Link)`
  font-size: 1.2rem;
  font-weight: 800;
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgb(101, 136, 247);
  }
`;
