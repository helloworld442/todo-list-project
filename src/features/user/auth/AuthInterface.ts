interface AuthProps {
  type: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface LoginProps extends AuthProps {
  form: { username: string; password: string };
  errors: { username: string; password: string };
}

export interface RegisterProps extends AuthProps {
  form: { username: string; password: string; email: string };
  errors: { username: string; password: string; email: string };
}
