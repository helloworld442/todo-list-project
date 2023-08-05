import Layout from "../layout/Layout";
import TodoFormContainer from "../container/TodoFormContainer";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer";

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
