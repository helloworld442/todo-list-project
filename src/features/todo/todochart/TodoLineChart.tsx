import { useEffect, useRef } from "react";
import { ChartProps, DataPoint } from "./TodoChartInterface";
import * as d3 from "d3";
import { TodoLineChartBox } from "./TodoChartStyle";

const TodoLineChart = ({ data }: ChartProps) => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const svg = d3.select(chartRef.current);

    const svgWidth = +svg.attr("width");
    const svgHeight = +svg.attr("height");

    const margin = 36; // 동일한 마진 값

    const width = svgWidth - 2 * margin;
    const height = svgHeight - 2 * margin;

    const g = svg.append("g").attr("transform", `translate(${margin},${margin})`); // 왼쪽과 위에 마진 적용

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.3);

    const y = d3
      .scaleLinear()

      .domain([0, d3.max(data, (d) => d.value) || 0])
      .range([height, 0]);

    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g").attr("class", "y-axis").call(d3.axisLeft(y).ticks(5, "s"));

    const startline = d3
      .line<DataPoint>()
      .curve(d3.curveBasis)
      .x((d) => x(d.label)! + x.bandwidth() / 2)
      .y((d) => y(0));

    const endline = d3
      .line<DataPoint>()
      .curve(d3.curveBasis)
      .x((d) => x(d.label)! + x.bandwidth() / 2)
      .y((d) => y(d.value));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#6588f7")
      .attr("stroke-width", 6)
      .attr("class", "line")
      .attr("d", startline)
      .transition()
      .duration(1000) // 애니메이션 지속 시간 (1초)
      .attr("d", endline);
  }, []);

  return (
    <TodoLineChartBox>
      <svg ref={chartRef} width={353} height={250} />
    </TodoLineChartBox>
  );
};

export default TodoLineChart;
