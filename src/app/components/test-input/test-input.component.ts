import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';

@Component({
  selector: 'test-input',
  standalone: true,
  imports: [],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss'
})
export class TestInputComponent {
  @Input() inputData!: IInput;
}
