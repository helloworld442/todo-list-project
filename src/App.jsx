import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/GlobalStyle";
import theme from "./utils/theme";
import Router from "./shared/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
