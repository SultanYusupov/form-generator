import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {IForm} from '../../interfaces/IForm';

@Component({
  selector: 'test-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.css'
})
export class TestCheckboxComponent {
  @Input() inputData!: IForm;
}
