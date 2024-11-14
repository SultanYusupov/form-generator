import {Component, Input, OnInit} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {IForm} from '../../interfaces/IForm';
import {NgClass} from '@angular/common';
import {FormGroup} from '@angular/forms';

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
  opened:boolean = false;
  selectedOption: string = '';

  ngOnInit() {
    this.selectedOption = this.fControl.get(this.inputData.inputName)?.value;
  }

  openSelect() {
    this.opened = !this.opened;
  }

  select(value: string) {
    this.fControl.get(this.inputData.inputName)?.setValue(value);
    this.selectedOption = value;
    this.opened = false;
  }
}
