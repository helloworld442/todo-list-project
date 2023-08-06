import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
        <GlobalStyle />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
