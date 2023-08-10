import { ChartProps } from "./TodoChartInterface";
import { TodoChartBox } from "./TodoChartStyle";
import TodoLineChart from "./TodoLineChart";
import TodoBarChart from "./TodoBarChart";

const TodoChartComponent = ({ data }: ChartProps) => {
  return (
    <TodoChartBox>
      <TodoLineChart data={data} />
      <TodoBarChart data={data} />
    </TodoChartBox>
  );
};

export default TodoChartComponent;
