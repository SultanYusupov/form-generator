import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {IForm} from '../../interfaces/IForm';
import {FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'test-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.css'
})
export class TestCheckboxComponent {
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;
  @Output() add: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<{inputName: string, index: number}> = new EventEmitter();

  ngOnInit() {
    this.fControl.addControl(this.inputData.inputName, new FormArray([]));
  }

  choseOption($event:Event, index: number) {
    const checkStatus = ($event.target as HTMLInputElement).checked;
    if (checkStatus) {
      const inputValue = ($event.target as HTMLInputElement).value;
      this.add.emit(inputValue)
    } else {
      this.remove.emit({inputName: this.inputData.inputName, index: index});
    }
  }
}
