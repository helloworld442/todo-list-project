import { Layout, Header, Footer } from "../layout";
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
