import {IInput} from './IInput';

export interface IForm {
  // type: string,
  // formList: IInput[]
  id: string,
  type: string,
  labelName: string,
  inputName: string,
  required: boolean,
  options?: string[],
  min?: number,
  max?: number
}
