import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterAnchor = styled(Link)`
  font-size: 1.8rem;
  color: #888;
  .active {
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 100%;
    color: #fff;
    background: ${(props) => props.theme.baseColor};
  }
`;
