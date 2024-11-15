import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IForm} from '../../interfaces/IForm';
import {NgClass, NgIf} from '@angular/common';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {IOption} from '../../interfaces/IOption';

@Component({
  selector: 'test-select',
  standalone: true,
  imports: [
    NgClass,
    NgIf
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
    const defaultValue:string = this.defaultOption == -1 ? '' : this.inputData!.options![this.defaultOption].value;
    this.inputData.multiply ? this.getFormArray().controls[0].setValue(defaultValue) : this.fControl.get(this.inputData.inputName)?.setValue(defaultValue);
    this.selectedOption = defaultValue;
  }

  getFormArray() {
    return (this.fControl.get(this.inputData.inputName) as FormArray);
  }
  get defaultOption():number {
    return this.inputData.options!.findIndex((op: IOption) => op.selected);
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
      if (this.defaultOption != -1) this.inputData.options?.map(o => o.selected = false);
      this.fControl.get(this.inputData.inputName)?.setValue(option.value);
      this.selectedOption = option.value;
    }
    option.selected = !option.selected;
  }
}
