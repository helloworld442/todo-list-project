import { styled } from "styled-components";
import { TodoMainTitleText, TodoSubTitleText } from "../atom/Text/TodoTitleText";

const TodoTitleField = ({ subTitle, mainTitle }) => {
  return (
    <TodoTitleFieldStyle>
      <TodoSubTitleText>{subTitle}</TodoSubTitleText>
      <TodoMainTitleText>{mainTitle}</TodoMainTitleText>
    </TodoTitleFieldStyle>
  );
};

const TodoTitleFieldStyle = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export default TodoTitleField;
