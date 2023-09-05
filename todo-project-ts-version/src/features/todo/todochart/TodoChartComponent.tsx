import { ChartProps } from "./TodoChartInterface";
import { TodoChartBox } from "./TodoChartStyle";
import TodoChartDesc from "./TodoChartDesc";
import TodoLineChart from "./TodoLineChart";
import TodoBarChart from "./TodoBarChart";

const TodoChartComponent = ({ data }: ChartProps) => {
  return (
    <TodoChartBox>
      <TodoChartDesc data={data} />
      <TodoLineChart data={data} />
      <TodoBarChart data={data} />
    </TodoChartBox>
  );
};

export default TodoChartComponent;
