import { Footer, Header, Layout } from "../layout";
import { TodoFormContainer } from "../features/todo";

const Write = () => {
  return (
    <Layout>
      <Header />
      <TodoFormContainer />
      <Footer />
    </Layout>
  );
};

export default Write;
