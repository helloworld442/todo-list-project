import Layout from "../layout/Layout";
import TodoFormContainer from "../container/TodoFormContainer";
import FooterContainer from "../layout/Footer";
import { CloseOutlined } from "@ant-design/icons";

const Write = () => {
  return (
    <Layout>
      <TodoFormContainer />
      <FooterContainer icon={<CloseOutlined />} location="/" />
    </Layout>
  );
};

export default Write;
