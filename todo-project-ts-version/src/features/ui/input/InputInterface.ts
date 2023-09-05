export interface InputBoxProps {
  type: string;
  name: string;
  value: string;
  error: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
