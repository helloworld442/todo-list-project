import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";
import theme from "./utils/theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
