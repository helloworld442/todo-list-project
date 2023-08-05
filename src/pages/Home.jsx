import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import TodoListContainer from "../container/TodoListContainer";
import Footer from "../layout/Footer";

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
