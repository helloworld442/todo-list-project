import TodoChart from "./TodoChartCompoent";

const TodoChartContainer = () => {
  return (
    <TodoChart>
      <TodoChart.Line />
      <TodoChart.Bar />
      <TodoChart.Radar />
    </TodoChart>
  );
};

export { TodoChartContainer };
