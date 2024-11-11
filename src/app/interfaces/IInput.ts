export interface IInput {
  id: string,
  labelName: string,
  inputName: string,
  required: boolean,
  options?: string[],
  min?: number,
  max?: number
}
