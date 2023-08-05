import { RecoilRoot } from "recoil";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      <RecoilRoot>
        <Router />
        <GlobalStyle />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
