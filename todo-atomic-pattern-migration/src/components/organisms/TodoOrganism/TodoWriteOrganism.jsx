import { styled } from "styled-components";
import TodoWriteField from "../../molecules/TodoField/TodoWriteField";
import { TodoWriteButton } from "../../atom/Button/TodoWriteButton";
import { useCallback, useMemo, useState } from "react";
import TodoSelectField from "../../molecules/TodoField/TodoSelectField";

const TodoWriteOrganism = () => {
  const colorOptions = useMemo(() => ["tomato", "skyblue", "yellowgreen", "purple"], []);
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
    <TodoWriteOrganismStyle onSubmit={onSubmitTodo}>
      <TodoWriteField
        type="text"
        name="title"
        value={form.title}
        error={errors.title}
        onChange={onChangeInput}
      />
      <TodoSelectField
        name="color"
        value={form.color}
        error={errors.color}
        options={colorOptions}
        onChange={onChangeSelect}
      />
      <TodoSelectField
        name="date"
        value={form.date}
        error={errors.date}
        options={dateOptions}
        onChange={onChangeSelect}
      />
      <TodoWriteButton>Add</TodoWriteButton>
    </TodoWriteOrganismStyle>
  );
};

const TodoWriteOrganismStyle = styled.form`
  position: relative;
  padding: 50px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default TodoWriteOrganism;
