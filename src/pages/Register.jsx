import Layout from "../layout/Layout";
import RegisterContainer from "../container/RegisterContainer";
import Header from "../layout/Header/Header";

const Register = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <RegisterContainer />
    </Layout>
  );
};

export default Register;
