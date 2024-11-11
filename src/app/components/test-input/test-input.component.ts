import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {ControlContainer, FormGroup, FormGroupName, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'test-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }]
})
export class TestInputComponent {
  @Input() inputData!: IInput;
  @Input() fControl!: FormGroup;
}
