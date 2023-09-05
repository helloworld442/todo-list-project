import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../../../api/todo";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoFormComponent";

const TodoFormContainer = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ title: "", color: "", date: "" });
  const [errors, setErrors] = useState({ title: "", color: "", date: "" });

  const todoMutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      navigateTo("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
    todoMutation.mutate(form);
    setForm({ title: "", color: "", date: "" });
  };

  if (todoMutation.isLoading) return <div>로딩 중입니다 ...</div>;

  if (todoMutation.isError) return <div>에러 입니다 ....</div>;

  return (
    <TodoForm
      form={form}
      errors={errors}
      onInput={onChangeInput}
      onSelect={onChangeSelect}
      onSubmit={onSubmitTodo}
    />
  );
};

export { TodoFormContainer };
