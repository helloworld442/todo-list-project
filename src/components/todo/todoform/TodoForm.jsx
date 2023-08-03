import Button from "../../../common/Button/Button";
import InputBox from "../../../common/Input/InputBox";
import Select from "../../../common/Select/Select";
import { StTodoForm } from "./style";

const TodoForm = ({ form, errors, onInput, onSelect, onSubmit }) => {
  return (
    <StTodoForm onSubmit={onSubmit}>
      <InputBox
        type="text"
        name="title"
        value={form.title}
        error={errors.title}
        onChange={onInput}
      />
      <InputBox
        type="text"
        name="content"
        value={form.content}
        error={errors.content}
        onChange={onInput}
      />
      <Select
        name="color"
        options={["RED", "BLUE", "GREEN", "PURPLE"]}
        value={form.color}
        error={errors.color}
        onChange={onSelect}
      />
      <Select
        name="date"
        options={["SUN", "MON", "THU", "WEN", "THR", "FRI", "SAT"]}
        value={form.date}
        error={errors.date}
        onChange={onSelect}
      />
      <Button>Add</Button>
    </StTodoForm>
  );
};

export default TodoForm;
