import { useCallback, useState } from "react";
import TodoFormComponent from "./TodoFormComponent";

const TodoFormContainer = () => {
  const [form, setForm] = useState({ title: "", color: "", date: "" });
  const [errors, setErrors] = useState({ title: "", color: "", date: "" });

  const validateTitle = (title: string) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length > 15) return "제목의 길이는 (5~15)자로 맞춰주세요";
    if (title.length < 5) return "제목의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const validateColor = (color: string) => {
    if (color.trim() === "") return "색상을 입력해주세요";
    return "";
  };

  const validateDate = (date: string) => {
    if (date.trim() === "") return "시간을 입력해주세요";
    return "";
  };

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onChangeSelect = useCallback((target: { name: string; value: string }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
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
    <TodoFormComponent
      form={form}
      errors={errors}
      onInput={onChangeInput}
      onSelect={onChangeSelect}
      onSubmit={onSubmitTodo}
    />
  );
};

export { TodoFormContainer };
