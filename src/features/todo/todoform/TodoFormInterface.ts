export interface TodoFormProps {
  form: { title: string; color: string; date: string };
  errors: { title: string; color: string; date: string };
  onSelect: (target: { name: string; value: string }) => void;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
