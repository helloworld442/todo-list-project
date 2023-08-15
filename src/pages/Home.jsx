import { Footer, Header, Layout } from "../features/ui";
import { TodoHead } from "../features/todo/component";

const Home = () => {
  return (
    <Layout>
      <Header />
      <TodoHead />
      <Footer />
    </Layout>
  );
};

export default Home;
