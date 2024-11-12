import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {IForm} from '../../interfaces/IForm';

@Component({
  selector: 'test-number',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './test-number.component.html',
  styleUrl: './test-number.component.css'
})
export class TestNumberComponent {
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;

  getControls() {
    return (this.fControl.get(this.inputData.inputName) as FormArray).controls;
  }
}
