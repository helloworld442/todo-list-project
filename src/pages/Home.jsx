import Layout from "../layout/Layout";
import HeaderContainer from "../layout/Header/Header";
import TodoListContainer from "../container/TodoListContainer";
import FooterContainer from "../layout/Footer";
import { PlusOutlined } from "@ant-design/icons";

const Home = () => {
  return (
    <Layout>
      <HeaderContainer />
      <TodoListContainer />
      <FooterContainer icon={<PlusOutlined />} location="/write" />
    </Layout>
  );
};

export default Home;
