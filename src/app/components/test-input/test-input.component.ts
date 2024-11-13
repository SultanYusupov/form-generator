import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {
  ControlContainer,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupName,
  ReactiveFormsModule
} from '@angular/forms';
import {IForm} from '../../interfaces/IForm';
import {AddButtonComponent} from '../add-button/add-button.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'test-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AddButtonComponent,
    NgIf,
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
