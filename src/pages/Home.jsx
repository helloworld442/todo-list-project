import Layout from "../layout/Layout";
import Header from "../layout/Header/header.components";
import Footer from "../layout/Footer/footer.components";
import { TodoListContainer } from "../features/todo";

const Home = () => {
  return (
    <Layout>
      <Header>
        <Header.Title />
        <Header.Desc />
      </Header>
      <TodoListContainer />
      <Footer />
    </Layout>
  );
};

export default Home;
