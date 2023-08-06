import { useMemo } from "react";
import { StTodoForm } from "./todoform.style";
import { Button, InputBox, Select } from "../../ui";

const TodoForm = ({ form, errors, onInput, onSelect, onSubmit }) => {
  const colorOptions = useMemo(() => ["RED", "BLUE", "GREEN", "PURPLE"], []);
  const dayOptions = useMemo(() => ["SUN", "MON", "THU", "WEN", "THR", "FRI", "SUN"], []);

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
        options={colorOptions}
        value={form.color}
        error={errors.color}
        onChange={onSelect}
      />
      <Select
        name="date"
        options={dayOptions}
        value={form.date}
        error={errors.date}
        onChange={onSelect}
      />
      <Button>Add</Button>
    </StTodoForm>
  );
};

export default TodoForm;
