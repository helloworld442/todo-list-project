import "./TodoForm.scss";
import { Button, Input } from "../../ui";

const TodoForm = () => {
  return (
    <form className="todoform">
      <Input type="text" name="title" />
      <Button>ADD</Button>
    </form>
  );
};

export { TodoForm };
