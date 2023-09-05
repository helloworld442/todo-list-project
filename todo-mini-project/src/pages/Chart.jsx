import Layout from "../layout/Layout";
import Header from "../layout/Header/Header";
import TodoChart from "../components/todo/todochart/TodoChart";
import Footer from "../layout/Footer";

const Chart = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <TodoChart />
      <Footer />
    </Layout>
  );
};

export default Chart;
