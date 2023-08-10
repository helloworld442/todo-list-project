import { ChartProps } from "./TodoChartInterface";
import { TodoChartDescBox, TodoChartDescContent, TodoChartDescProfile } from "./TodoChartStyle";

const TodoChartDesc = ({ data }: ChartProps) => {
  const maxTodoValue = Math.max(...data.map((item) => item.value));
  const minTodoValue = Math.min(...data.map((item) => item.value));
  const maxTodoLabel = data.find((item) => item.value === maxTodoValue)?.label;
  const minTodoLabel = data.find((item) => item.value === minTodoValue)?.label;

  console.log("asfsdaf");

  return (
    <TodoChartDescBox>
      <TodoChartDescProfile />
      <TodoChartDescContent>
        <span id="profile-name">
          <span>김민승님</span> 안녕하세용!
        </span>
        <span id="profile-max">
          가장 많이 한 날은 <span>{maxTodoLabel}</span> 이네요!
        </span>
        <span id="profile-min">
          가장 작게 한 날은 <span>{minTodoLabel}</span> 이네요ㅠ
        </span>
      </TodoChartDescContent>
    </TodoChartDescBox>
  );
};

export default TodoChartDesc;
