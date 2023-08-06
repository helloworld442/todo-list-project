import { styled } from "styled-components";

export const FooterBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
`;

export const FooterList = styled.ul`
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterItem = styled.li`
  font-size: 1.8rem;
  color: #888;
  &:hover {
    color: rgb(101, 136, 247);
  }
  .active {
    transition: all 0.3s ease-in-out;
    transform: translateY(-14px);
    padding: 8px;
    border-radius: 100%;
    color: #fff;
    background: rgb(101, 136, 247);
  }
`;
