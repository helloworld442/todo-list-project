export interface TodoFormProps {
  form: { title: string };
  errors: { title: string };
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
