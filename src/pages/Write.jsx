import Layout from "../layout/Layout";
import Header from "../layout/Header/header.components";
import Footer from "../layout/Footer/footer.components";
import { TodoFormContainer } from "../features/todo";

const Write = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <TodoFormContainer />
      <Footer />
    </Layout>
  );
};

export default Write;
