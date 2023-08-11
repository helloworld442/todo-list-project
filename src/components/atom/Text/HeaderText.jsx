import { styled } from "styled-components";

export const HeaderLeftText = styled.span`
  font-size: 1.4rem;
  color: #888;
  &:hover {
    color: ${(props) => props.theme.baseColor};
  }
  cursor: pointer;
`;

export const HeaderRightText = styled.span`
  font-size: 1.4rem;
  color: #888;
  &:hover {
    color: ${(props) => props.theme.baseColor};
  }
  cursor: pointer;
`;
