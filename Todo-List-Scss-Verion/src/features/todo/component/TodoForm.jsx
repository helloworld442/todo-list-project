import "./TodoForm.scss";
import { Button, Input, Select } from "../../ui";
import { useCallback, useMemo, useState } from "react";

const TodoForm = () => {
  const colorOptions = useMemo(() => ["RED", "BLUE", "GREEN", "PURPLE"], []);
  const dateOptions = useMemo(() => ["SUN", "MON", "THU", "WEN", "THR", "FRI", "SUN"], []);
  const [form, setForm] = useState({ title: "", color: "", date: "" });
  const [errors, setErrors] = useState({ title: "", color: "", date: "" });

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length > 15) return "제목의 길이는 (5~15)자로 맞춰주세요";
    if (title.length < 5) return "제목의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validateColor = (color) => {
    if (color.trim() === "") return "색상을 입력해주세요";
    return "";
  };

  const validateDate = (date) => {
    if (date.trim() === "") return "시간을 입력해주세요";
    return "";
  };

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onChangeSelect = useCallback((target) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onSubmitTodo = (e) => {
    e.preventDefault();
    const titleError = validateTitle(form.title);
    const colorError = validateColor(form.color);
    const dateError = validateDate(form.date);

    if (titleError || colorError || dateError) {
      setErrors({
        title: titleError,
        color: colorError,
        date: dateError,
      });
      return;
    }
    setForm({ title: "", color: "", date: "" });
  };

  return (
    <form className="todoform" onSubmit={onSubmitTodo}>
      <Input
        type="text"
        name="title"
        value={form.title}
        error={errors.title}
        onChange={onChangeInput}
      />
      <Select
        name="color"
        options={colorOptions}
        value={form.color}
        error={errors.color}
        onChange={onChangeSelect}
      />
      <Select
        name="date"
        options={dateOptions}
        value={form.date}
        error={errors.date}
        onChange={onChangeSelect}
      />
      <Button>ADD</Button>
    </form>
  );
};

export { TodoForm };
