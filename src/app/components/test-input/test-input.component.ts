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
import {NgForOf, NgIf} from '@angular/common';
import {RemoveButtonComponent} from '../remove-button/remove-button.component';

@Component({
  selector: 'test-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AddButtonComponent,
    NgIf,
    RemoveButtonComponent,
    NgForOf,
  ],
  templateUrl: './test-input.component.html',
  styleUrl: './test-input.component.scss',
  // viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }]
})
export class TestInputComponent {
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;
  @Output() add: EventEmitter<void> = new EventEmitter();
  @Output() remove: EventEmitter<{inputName: string, index: number}> = new EventEmitter();

  getControls() {
    return (this.fControl.get(this.inputData.inputName) as FormArray).controls;
  }

  addControlItem() {
    this.add.emit()
  }

  removeControlItem(index: number) {
    this.remove.emit({inputName: this.inputData.inputName, index: index})
  }
}
