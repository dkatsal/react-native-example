// global models

export interface ISelectOptions<T = string> {
  label: string;
  value: number | T;
  disabled?: boolean;
}
