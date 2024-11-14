import {IInput} from './IInput';

export interface IForm {
  id: string,
  type: string,
  labelName: string,
  inputName: string,
  required: boolean,
  multiply?: boolean,
  options?: Array<{id: number, value: string, selected: boolean}>,
  min: number | null,
  max: number | null
}
