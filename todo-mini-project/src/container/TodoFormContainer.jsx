import { useCallback, useState } from "react";
import TodoForm from "../components/todo/todoform/TodoForm";
import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "../api/todo";
import { useNavigate } from "react-router-dom";

const TodoFormContainer = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    title: "",
    content: "",
    color: "",
    date: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    content: "",
    color: "",
    date: "",
  });

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

  const validateContent = (content) => {
    if (content.trim() === "") return "내용을 입력하세요";
    if (content.length > 30) return "내용의 길이는 (10~30)자로 맞춰주세요";
    if (content.length < 10) return "내용의 길이는 (10~30)자로 맞춰주세요";
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
    const contentError = validateContent(form.content);
    const colorError = validateColor(form.color);
    const dateError = validateDate(form.date);

    if (titleError || contentError || colorError || dateError) {
      setErrors({
        title: titleError,
        content: contentError,
        color: colorError,
        date: dateError,
      });
      return;
    }
    todoMutation.mutate(form);
    setForm({ title: "", content: "", color: "", date: "" });
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

export default TodoFormContainer;
