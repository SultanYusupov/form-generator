import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {IForm} from '../../interfaces/IForm';
import {NgClass} from '@angular/common';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'test-select',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.css'
})
export class TestSelectComponent implements OnInit{
  @Input() inputData!: IForm;
  @Input() fControl!: FormGroup;
  @Output() add: EventEmitter<string> = new EventEmitter();
  @Output() remove: EventEmitter<{inputName: string, index: number}> = new EventEmitter();
  opened:boolean = false;
  selectedOption: string = '';

  ngOnInit() {
    if (this.inputData.multiply) {
      this.fControl.addControl(this.inputData.inputName, new FormArray([]));
    }
    else {
      this.fControl.addControl(this.inputData.inputName, new FormControl(''))
    }
    // this.selectedOption = this.fControl.get(this.inputData.inputName)?.value;
  }

  openSelect() {
    this.opened = !this.opened;
  }

  select(option: {id: number, value: string, selected: boolean}) {
    const formArray = (this.fControl.get(this.inputData.inputName) as FormArray);
    if (this.inputData.multiply) {
      const controlId = formArray.controls.findIndex(ctrl => ctrl.value === option.value);
      if (option.selected) {
        // (this.fControl.get(this.inputData.inputName) as FormArray).removeAt(controlId);
        this.remove.emit({inputName: this.inputData.inputName, index: controlId})
        this.selectedOption = formArray.controls[formArray.controls.length - 1]?.value ?? '';
      }
      else {
        // formArray.push(new FormControl(option.value));
        this.add.emit(option.value);
        this.selectedOption = formArray.controls[formArray.controls.length - 1].value;
      }
    }
    else {
      this.fControl.get(this.inputData.inputName)?.setValue(option.value);
      this.selectedOption = option.value;
    }
    option.selected = !option.selected;
  }
}
