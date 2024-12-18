import {IOption} from './IOption';

export interface IForm {
  id: string,
  type: string,
  labelName: string,
  inputName: string,
  required: boolean,
  multiply?: boolean,
  options?: IOption[],
  hint: string,
  placeholder: string
}
