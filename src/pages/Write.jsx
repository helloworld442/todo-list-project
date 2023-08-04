import Layout from "../layout/Layout";
import TodoFormContainer from "../container/TodoFormContainer";
import Header from "../layout/Header/Header";

const Write = () => {
  return (
    <Layout>
      <Header>
        <Header.Nav />
      </Header>
      <TodoFormContainer />
    </Layout>
  );
};

export default Write;
