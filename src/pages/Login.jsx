import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import LoginContainer from "../container/LoginContainer";

const Login = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <LoginContainer />
    </Layout>
  );
};

export default Login;
