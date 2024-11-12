import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'number-button',
  standalone: true,
  imports: [],
  templateUrl: './number-button.component.html',
  styleUrl: './number-button.component.scss'
})
export class NumberButtonComponent {
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();

  incrementNumber() {
    this.increment.emit();
  }
  decrementNumber() {
    this.decrement.emit();
  }
}
