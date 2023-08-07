import { styled } from "styled-components";

const Layout = styled.div`
  position: relative;
  width: 393px;
  height: 800px;
  margin: 0 auto;
  background: #fff;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

export default Layout;
