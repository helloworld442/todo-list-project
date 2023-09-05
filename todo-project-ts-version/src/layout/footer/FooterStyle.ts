import styled from "styled-components";

export const FooterNav = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.span`
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
