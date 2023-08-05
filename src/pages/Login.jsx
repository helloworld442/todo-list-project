import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import LoginContainer from "../container/LoginContainer";
import Footer from "../layout/Footer";

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
