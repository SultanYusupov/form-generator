import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IForm} from '../../interfaces/IForm';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IOption} from '../../interfaces/IOption';
import {NgIf} from '@angular/common';

@Component({
  selector: 'test-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
  ],
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.css'
})
export class TestCheckboxComponent {
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;
  @Output() add: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<{inputName: string, index: number}> = new EventEmitter();

  changeCheckbox($event:Event, index: number) {
    const checkStatus = ($event.target as HTMLInputElement).checked;
    if (checkStatus) {
      const inputValue = ($event.target as HTMLInputElement).value;
      this.add.emit(inputValue)
    } else {
      this.remove.emit({inputName: this.inputData.inputName, index: index});
    }
  }

  checkAll($event:Event) {
    const checkStatus = ($event.target as HTMLInputElement).checked;
    if (checkStatus) {
      this.inputData.options?.forEach((option: IOption) => {
        this.add.emit(option.value);
      });
    }
    else {
      this.inputData.options?.forEach((option: IOption) => {
        this.remove.emit({inputName: this.inputData.inputName, index: option.id});
      });

    }
    this.inputData.options?.map(el => el.selected = !el.selected)
  }
}
