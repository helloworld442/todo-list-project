import {
  TodoBarChartBox,
  TodoChartBox,
  TodoChartText,
  TodoLineChartBox,
  TodoRadarChartBox,
} from "./style";
import ReactApexChart from "react-apexcharts";

const dates = ["SUN", "MON", "THE", "WEN", "THR", "FRI", "SAT"];

const TodoChart = () => {
  return (
    <TodoChartBox>
      <TodoLineChart />
      <TodoBarChart />
      <TodoRadarChart />
    </TodoChartBox>
  );
};

const TodoLineChart = () => {
  const options = {
    chart: { id: "line-chart", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 5 },
    xaxis: { categories: dates },
    colors: ["#6588f7"],
    tooltip: { theme: "dark" },
  };

  const series = [{ name: "TodoList 완료 수", data: [19, 26, 20, 9, 0, 0, 0] }];

  return (
    <TodoLineChartBox>
      <TodoChartText>LINE CHART</TodoChartText>
      <ReactApexChart type="line" series={series} options={options} height={200} />
    </TodoLineChartBox>
  );
};

const TodoBarChart = () => {
  const options = {
    chart: { id: "bar-chart", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 5 },
    xaxis: { categories: dates },
    colors: ["#6588f7"],
    tooltip: { theme: "dark" },
  };

  const series = [{ name: "TodoList 완료 수", data: [19, 26, 20, 9, 0, 0, 0] }];

  return (
    <TodoBarChartBox>
      <TodoChartText>BAR CHART</TodoChartText>
      <ReactApexChart type="bar" series={series} options={options} height={200} />
    </TodoBarChartBox>
  );
};

const TodoRadarChart = () => {
  const options = {
    chart: { id: "radar-chart", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 5 },
    xaxis: { categories: dates },
    colors: ["#6588f7"],
    tooltip: { theme: "dark" },
  };

  const series = [{ name: "TodoList 완료 수", data: [19, 26, 20, 9, 0, 0, 0] }];

  return (
    <TodoRadarChartBox>
      <TodoChartText>RADAR CHART</TodoChartText>
      <ReactApexChart type="radar" series={series} options={options} height={200} />
    </TodoRadarChartBox>
  );
};

export default TodoChart;
