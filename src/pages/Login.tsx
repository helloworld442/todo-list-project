import { Layout, Header, Footer } from "../layout";
import { LoginContainer } from "../features/user";

const Login = () => {
  return (
    <Layout>
      <Header />
      <LoginContainer />
      <Footer />
    </Layout>
  );
};

export default Login;
