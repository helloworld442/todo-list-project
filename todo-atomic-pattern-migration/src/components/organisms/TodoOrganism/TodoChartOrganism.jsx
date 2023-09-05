import { useEffect, useRef } from "react";
import TodoChartField from "../../molecules/TodoField/TodoChartField";
import * as d3 from "d3";

const data = [
  { label: "SUN", value: 10 },
  { label: "MON", value: 20 },
  { label: "THU", value: 15 },
  { label: "WEN", value: 25 },
  { label: "THR", value: 18 },
  { label: "FRI", value: 18 },
  { label: "SAT", value: 18 },
];

const TodoBarChartOrganism = () => {
  const chartRef = useRef(null);

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

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.label))
      .attr("y", height) // 아래로 위치
      .attr("width", x.bandwidth())
      .attr("height", 0) // 초기 높이 0

      // 애니메이션 추가
      .transition()
      .duration(1000) // 애니메이션 지속 시간 (1초)
      .delay((_, i) => i * 200) // 각 막대별 애니메이션 지연 시간
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => height - y(d.value));

    g.selectAll(".bar-text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "bar-text")
      .attr("x", (d) => x(d.label) + x.bandwidth() / 2)
      .attr("y", height - 5) // 초기 위치를 아래로 설정
      .attr("text-anchor", "middle")
      .text((d) => d.value)
      .transition()
      .duration(1000)
      .delay((_, i) => i * 200)
      .attr("y", (d) => y(d.value) - 5); // 약간 위에 표시
  }, [data]);

  return <TodoChartField chartRef={chartRef} />;
};

const TodoLineChartOrganism = () => {
  const chartRef = useRef(null);

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
      .line()
      .curve(d3.curveBasis)
      .x((d) => x(d.label) + x.bandwidth() / 2)
      .y((_) => y(0));

    const endline = d3
      .line()
      .curve(d3.curveBasis)
      .x((d) => x(d.label) + x.bandwidth() / 2)
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
  }, [data]);

  return <TodoChartField chartRef={chartRef} />;
};

const Bar = TodoBarChartOrganism;
const Line = TodoLineChartOrganism;

export { Bar, Line };
