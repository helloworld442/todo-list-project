import Button from "../../ui/button/ButtonComponent";
import InputBox from "../../ui/input/InputComponent";
import { TodoFormProps } from "./TodoFormInterface";
import { TodoFormStyle } from "./TodoFormStyle";

const TodoForm = ({ form, errors, onInput, onSubmit }: TodoFormProps) => {
  return (
    <TodoFormStyle onSubmit={onSubmit}>
      <InputBox
        type="text"
        name="title"
        value={form.title}
        error={errors.title}
        onChange={onInput}
      />
      <Button>Add</Button>
    </TodoFormStyle>
  );
};

export default TodoForm;
