import {Component, Input} from '@angular/core';
import {IInput} from '../../interfaces/IInput';
import {IForm} from '../../interfaces/IForm';
import {NgClass} from '@angular/common';

@Component({
  selector: 'test-select',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './test-select.component.html',
  styleUrl: './test-select.component.css'
})
export class TestSelectComponent {
  @Input() inputData!: IForm;
  opened:boolean = false;

  openSelect() {
    this.opened = !this.opened;
  }
}
