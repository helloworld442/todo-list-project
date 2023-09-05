import { Footer, Header, Layout } from "../layout";
import { TodoListContainer } from "../features/todo";

const Home = () => {
  return (
    <Layout>
      <Header />
      <TodoListContainer />
      <Footer />
    </Layout>
  );
};

export default Home;
