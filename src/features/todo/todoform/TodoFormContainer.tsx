import { useState } from "react";
import TodoForm from "./TodoFormComponent";

const TodoFormContainer = () => {
  const [form, setForm] = useState({ title: "" });
  const [errors, setErrors] = useState({ title: "" });

  const validateTitle = (title: string) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length > 15) return "제목의 길이는 (5~15)자로 맞춰주세요";
    if (title.length < 5) return "제목의 길이는 (5~15)자로 맞춰주세요";
    return "";
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleError = validateTitle(form.title);
    if (titleError) {
      setErrors({ title: titleError });
      return;
    }
    setForm({ title: "" });
  };

  return <TodoForm form={form} errors={errors} onInput={onChangeInput} onSubmit={onSubmitTodo} />;
};

export { TodoFormContainer };
