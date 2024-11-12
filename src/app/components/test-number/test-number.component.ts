import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {IForm} from '../../interfaces/IForm';
import {NumberButtonComponent} from '../number-button/number-button.component';

@Component({
  selector: 'test-number',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NumberButtonComponent
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

  incrementNumber(i?: number) {
    let currentValue:number;
    if (typeof i === "number") {
      currentValue = this.getControls().at(i)!.value ?? 0;
      this.getControls().at(i)!.setValue(++currentValue);
    }
    else {
      currentValue = this.fControl.get(this.inputData.inputName)?.value ?? 0;
      this.fControl.get(this.inputData.inputName)?.setValue(++currentValue);
    }

  }
  decrementNumber(i?:number) {
    let currentValue:number;
    if (typeof i === "number") {
      currentValue =  this.getControls().at(i)!.value ?? 0;
      this.getControls().at(i)!.setValue(--currentValue);
    }
    else {
      currentValue = this.fControl.get(this.inputData.inputName)?.value ?? 0;
      this.fControl.get(this.inputData.inputName)?.setValue(--currentValue);
    }
  }
}
