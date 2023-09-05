import { Footer, Header, Layout } from "../features/ui";
import { TodoChart } from "../features/todo/component";

const Chart = () => {
  return (
    <Layout>
      <Header />
      <TodoChart />
      <Footer />
    </Layout>
  );
};

export default Chart;
