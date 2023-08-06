import Layout from "../layout/Layout";
import Footer from "../layout/Footer/footer.components";
import Header from "../layout/Header/header.components";
import { RegisterContainer } from "../features/user";

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
