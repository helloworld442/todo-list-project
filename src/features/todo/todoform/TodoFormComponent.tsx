import { useMemo } from "react";
import { Button, InputBox, Select } from "../../ui";
import { TodoFormStyle } from "./TodoFormStyle";
import { TodoFormProps } from "./TodoFormInterface";

const TodoFormComponent = ({ form, errors, onInput, onSelect, onSubmit }: TodoFormProps) => {
  const colorOptions = useMemo(() => ["tomato", "skyblue", "yellowgreen", "purple"], []);
  const dateOptions = useMemo(() => ["SUN", "MON", "THU", "WEN", "THR", "FRI", "SUN"], []);

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
      <Select
        name="date"
        value={form.date}
        error={errors.date}
        options={dateOptions}
        onChange={onSelect}
      />
      <Button>Add</Button>
    </TodoFormStyle>
  );
};

export default TodoFormComponent;
