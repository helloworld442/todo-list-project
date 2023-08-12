import { styled } from "styled-components";
import TodoDateField from "../../molecules/TodoField/TodoDateField";

const TodoDateOrganism = () => {
  const dates = [
    { label: "S", value: 6 },
    { label: "M", value: 7 },
    { label: "T", value: 8 },
    { label: "W", value: 9 },
    { label: "T", value: 10 },
    { label: "F", value: 11 },
    { label: "S", value: 12 },
  ];
  return (
    <TodoDateOrganismStyle>
      {dates.map((date, index) => (
        <TodoDateField key={index} label={date.label} value={date.value} />
      ))}
    </TodoDateOrganismStyle>
  );
};

const TodoDateOrganismStyle = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 24px 35px -24px rgba(211, 211, 211, 0.98);
`;

export default TodoDateOrganism;
