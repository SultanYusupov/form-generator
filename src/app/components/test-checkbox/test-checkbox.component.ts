import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IForm} from '../../interfaces/IForm';
import {FormArray, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'test-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './test-checkbox.component.html',
  styleUrl: './test-checkbox.component.css'
})
export class TestCheckboxComponent implements OnInit{
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;
  @Output() add: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<{inputName: string, index: number}> = new EventEmitter();

  ngOnInit() {
    this.fControl.addControl(this.inputData.inputName, new FormArray([]));
  }

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
      this.inputData.options?.forEach(option => {
        this.add.emit(option.value);
      });
    }
    else {
      this.inputData.options?.forEach(option => {
        this.remove.emit({inputName: this.inputData.inputName, index: option.id});
      });

    }
    this.inputData.options?.map(el => el.selected = !el.selected)
  }
}
