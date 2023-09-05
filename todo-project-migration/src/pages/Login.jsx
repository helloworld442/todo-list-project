import { Footer, Header, Layout } from "../layout";
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
