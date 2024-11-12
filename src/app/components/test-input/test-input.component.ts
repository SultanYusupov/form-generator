import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {ControlContainer, FormArray, FormGroup, FormGroupName, ReactiveFormsModule} from '@angular/forms';
import {IForm} from '../../interfaces/IForm';

@Component({
  selector: 'test-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss',
  // viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }]
})
export class TestInputComponent {
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;

  getControls() {
    return (this.fControl.get(this.inputData.inputName) as FormArray).controls;
  }
}
