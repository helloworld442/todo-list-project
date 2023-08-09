export interface SelectProps {
  name: string;
  options: string[];
  value: string;
  error: string;
  onChange: (target: { name: string; value: string }) => void;
}

export interface SelectErrorProps {
  error: string;
}
