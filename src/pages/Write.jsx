import { Layout, Header, Footer } from "../layout";
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
