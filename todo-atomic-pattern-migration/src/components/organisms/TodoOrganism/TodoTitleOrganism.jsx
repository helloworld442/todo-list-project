import TodoTitleField from "../../molecules/TodoField/TodoTItleField";

const TodoTitleOrganism = () => {
  const subTitle = "Friday,May 11";
  const mainTitle = "To-Do List";

  return <TodoTitleField subTitle={subTitle} mainTitle={mainTitle} />;
};

export default TodoTitleOrganism;
