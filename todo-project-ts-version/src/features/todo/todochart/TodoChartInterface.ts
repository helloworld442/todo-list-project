export interface DataPoint {
  label: string;
  value: number;
}

export interface ChartProps {
  data: DataPoint[];
}
