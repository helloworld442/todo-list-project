import TodoChartComponent from "./TodoChartComponent";

const TodoChartContainer = () => {
  const data = [
    { label: "SUN", value: 10 },
    { label: "MON", value: 20 },
    { label: "THU", value: 15 },
    { label: "WEN", value: 25 },
    { label: "THR", value: 18 },
    { label: "FRI", value: 18 },
    { label: "SAT", value: 18 },
  ];
  return <TodoChartComponent data={data} />;
};

export { TodoChartContainer };
