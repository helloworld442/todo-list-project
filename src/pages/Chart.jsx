import { Footer, Header, Layout } from "../layout";
import { TodoChartContainer } from "../features/todo";

const Chart = () => {
  return (
    <Layout>
      <Header />
      <TodoChartContainer />
      <Footer />
    </Layout>
  );
};

export default Chart;
