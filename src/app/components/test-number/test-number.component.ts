import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';

@Component({
  selector: 'test-number',
  standalone: true,
  imports: [],
  templateUrl: './test-number.component.html',
  styleUrl: './test-number.component.css'
})
export class TestNumberComponent {
  @Input() inputData!: IInput;
}
