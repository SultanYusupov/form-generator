import {Component, Input} from '@angular/core';

@Component({
  selector: 'test-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.css'
})
export class TestCheckboxComponent {
  @Input() inputData: object = {};
}
