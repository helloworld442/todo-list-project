import Layout from "../layout/Layout";
import Header from "../layout/header/header.components.jsx";
import Footer from "../layout/footer/footer.components";
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
