import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IForm} from '../../interfaces/IForm';
import {NgClass} from '@angular/common';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {IOption} from '../../interfaces/IOption';

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
      this.getFormArray().push(new FormControl(this.inputData!.options![0].value));
    }
    else {
      this.fControl.addControl(this.inputData.inputName, new FormControl(this.inputData!.options![0].value));
    }
    this.selectedOption = this.inputData.options![0].value;
    this.inputData.options![0].selected = true;
  }

  getFormArray() {
    return (this.fControl.get(this.inputData.inputName) as FormArray);
  }
  get selectedOptions() {
    return this.inputData.options!.filter((op: IOption) => op.selected);
  }

  openSelect() {
    this.opened = !this.opened;
  }

  select(option: IOption) {
    if (this.inputData.multiply) {
      if (option.selected) {
        const controlId = this.getFormArray().controls.findIndex(ctrl => ctrl.value === option.value);
        this.remove.emit({inputName: this.inputData.inputName, index: controlId})
        this.selectedOption = this.getFormArray().controls[this.getFormArray().controls.length - 1]?.value ?? '';
      }
      else {
        this.add.emit(option.value);
        this.selectedOption = this.getFormArray().controls[this.getFormArray().controls.length - 1].value;
      }
    }
    else {
      if (this.selectedOptions.length > 0) {
        this.inputData.options?.map((el: IOption) => el.selected = false);
      }
      this.fControl.get(this.inputData.inputName)?.setValue(option.value);
      this.selectedOption = option.value;
    }
    option.selected = !option.selected;
  }
}
