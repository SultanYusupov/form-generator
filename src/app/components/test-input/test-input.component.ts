import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {ControlContainer, FormArray, FormGroup, FormGroupName, ReactiveFormsModule} from '@angular/forms';
import {IForm} from '../../interfaces/IForm';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'test-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
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
