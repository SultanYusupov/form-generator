import {Component, Input} from '@angular/core';

@Component({
  selector: 'submit',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent{
  @Input() isDisabled!: boolean;
}
