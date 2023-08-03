import { RecoilRoot } from "recoil";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <Router />
      <GlobalStyle />
    </RecoilRoot>
  );
}

export default App;
