import styled from "styled-components";

export const HeaderNav = styled.nav`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavText = styled.span`
  font-size: 1.4rem;
  color: #888;
  &:hover {
    color: ${(props) => props.theme.baseColor};
  }
`;
