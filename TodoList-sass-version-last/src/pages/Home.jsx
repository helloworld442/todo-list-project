import { Footer, Header, Layout } from "../features/ui";
import { TodoHead, TodoList } from "../features/todo/component";

const Home = () => {
  return (
    <Layout>
      <Header />
      <TodoHead />
      <TodoList />
      <Footer />
    </Layout>
  );
};

export default Home;
