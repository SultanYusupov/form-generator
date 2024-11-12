import {IInput} from './IInput';

export interface IForm {
  // type: string,
  // formList: IInput[]
  id: string,
  type: string,
  labelName: string,
  inputName: string,
  required: boolean,
  multiply?: boolean,
  options?: string[],
  min: number | null,
  max: number | null
}
