import { Layout, Header, Footer } from "../layout";
import { LoginContainer } from "../features/user";

const Login = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <LoginContainer />
      <Footer />
    </Layout>
  );
};

export default Login;
