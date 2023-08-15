import "./TodoForm.scss";
import { Button, Input, Select } from "../../ui";

const TodoForm = () => {
  return (
    <form className="todoform">
      <Input type="text" name="title" />
      <Select name="color" />
      <Select name="day" />
      <Button>ADD</Button>
    </form>
  );
};

export { TodoForm };
