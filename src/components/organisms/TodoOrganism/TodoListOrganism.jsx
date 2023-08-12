import { styled } from "styled-components";
import TodoListField from "../../molecules/TodoField/TodoListField";

const TodoListOrganism = () => {
  const todos = [
    { id: 0, title: "todo item1", color: "tomato" },
    { id: 1, title: "todo item2", color: "tomato" },
    { id: 2, title: "todo item3", color: "tomato" },
    { id: 3, title: "todo item4", color: "tomato" },
    { id: 4, title: "todo item5", color: "tomato" },
  ];

  return (
    <TodoListOrganismStyle>
      {todos.map((todo) => (
        <TodoListField key={todo.id} title={todo.title} color={todo.color} />
      ))}
    </TodoListOrganismStyle>
  );
};

const TodoListOrganismStyle = styled.ul`
  width: 100%;
  height: 500px;
  padding: 0 20px;
  padding-top: 50px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export default TodoListOrganism;
