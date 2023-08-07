import Layout from "../layout/Layout";
import Footer from "../layout/footer/footer.components";
import Header from "../layout/header/Header.components";
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
