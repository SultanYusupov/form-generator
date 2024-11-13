import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {AbstractControl, FormArray, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {IForm} from '../../interfaces/IForm';
import {NumberButtonComponent} from '../number-button/number-button.component';
import {AddButtonComponent} from '../add-button/add-button.component';
import {NgForOf, NgIf} from '@angular/common';
import {RemoveButtonComponent} from '../remove-button/remove-button.component';

@Component({
  selector: 'test-number',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NumberButtonComponent,
    AddButtonComponent,
    NgIf,
    RemoveButtonComponent,
    NgForOf
  ],
  templateUrl: './test-number.component.html',
  styleUrl: './test-number.component.css'
})
export class TestNumberComponent {
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
    this.remove.emit({inputName: this.inputData.inputName, index: index});
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
