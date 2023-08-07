import { Layout, Header, Footer } from "../layout";
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
