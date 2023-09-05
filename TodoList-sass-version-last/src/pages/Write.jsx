import { Footer, Header, Layout } from "../features/ui";
import { TodoForm } from "../features/todo/component";

const Write = () => {
  return (
    <Layout>
      <Header />
      <TodoForm />
      <Footer />
    </Layout>
  );
};

export default Write;
