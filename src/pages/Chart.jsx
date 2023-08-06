import Layout from "../layout/Layout";
import Footer from "../layout/Footer/footer.components";
import Header from "../layout/Header/header.components";
import { TodoChartContainer } from "../features/todo";

const Chart = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <TodoChartContainer />
      <Footer />
    </Layout>
  );
};

export default Chart;
