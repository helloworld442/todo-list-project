import { Footer, Header, Layout } from "../features/ui";
import { Login } from "../features/user/component";

const SignIn = () => {
  return (
    <Layout>
      <Header />
      <Login />
      <Footer />
    </Layout>
  );
};

export default SignIn;
