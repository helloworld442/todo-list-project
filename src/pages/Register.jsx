import Layout from "../layout/Layout";
import Footer from "../layout/footer/footer.components";
import Header from "../layout/header/HeaderComponents";
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
