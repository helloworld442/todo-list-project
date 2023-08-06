import Layout from "../layout/Layout";
import Footer from "../layout/Footer/footer.components";
import Header from "../layout/Header/header.components";
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
