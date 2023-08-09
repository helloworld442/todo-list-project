import { useMemo } from "react";
import { Button, InputBox, Select } from "../../ui";
import { TodoFormStyle } from "./TodoFormStyle";
import { TodoFormProps } from "./TodoFormInterface";

const TodoForm = ({ form, errors, onInput, onSelect, onSubmit }: TodoFormProps) => {
  const colorOptions = useMemo(() => ["tomato", "skyblue", "yellowgreen", "purple"], []);

  return (
    <TodoFormStyle onSubmit={onSubmit}>
      <InputBox
        type="text"
        name="title"
        value={form.title}
        error={errors.title}
        onChange={onInput}
      />
      <Select
        name="color"
        value={form.color}
        error={errors.color}
        options={colorOptions}
        onChange={onSelect}
      />
      <Button>Add</Button>
    </TodoFormStyle>
  );
};

export default TodoForm;
