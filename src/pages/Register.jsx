import Layout from "../layout/Layout";
import RegisterContainer from "../container/RegisterContainer";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer";

const Register = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <RegisterContainer />
      <Footer />
    </Layout>
  );
};

export default Register;
