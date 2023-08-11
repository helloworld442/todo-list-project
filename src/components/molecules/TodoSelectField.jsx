import { styled } from "styled-components";
import { TodoSelectLabel } from "../atom/Label/TodoSelectLabel";
import { TodoSelectErrortext, TodoSelectTrigger } from "../atom/Text/TodoSelectText";
import { useState } from "react";

const TodoSelectField = ({ name, options, value, error, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => {
    setIsOpen(true);
    onChange({ name, value: "" });
  };

  const onDonwSelect = (option) => {
    setIsOpen(false);
    onChange({ name, value: option });
  };

  return (
    <TodoSelectFieldStyle>
      <TodoSelectLabel>{name}</TodoSelectLabel>
      <TodoSelectTrigger error={error} onClick={onOpenSelect}>
        {value || "chose option"}
      </TodoSelectTrigger>
      {isOpen && (
        <>
          <TodoSelectBackground onClick={() => onDonwSelect("")} />
          <TodoSelectMenu>
            {options.map((option, index) => (
              <TodoSelectItem key={index} onClick={() => onDonwSelect(option)}>
                {option}
              </TodoSelectItem>
            ))}
          </TodoSelectMenu>
        </>
      )}
      <TodoSelectErrortext>{error}</TodoSelectErrortext>
    </TodoSelectFieldStyle>
  );
};

const TodoSelectFieldStyle = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding-bottom: 24px;
`;

const TodoSelectMenu = styled.ul`
  position: absolute;
  width: 100%;
  padding: 12px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  z-index: 100;
`;

const TodoSelectItem = styled.li`
  width: 100px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const TodoSelectBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #d3d3d3;
  z-index: 100;
  opacity: 0.2;
`;

export default TodoSelectField;
