import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {IForm} from '../../interfaces/IForm';

@Component({
  selector: 'test-select',
  standalone: true,
  imports: [],
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.css'
})
export class TestSelectComponent {
  @Input() inputData!: IForm;
}
