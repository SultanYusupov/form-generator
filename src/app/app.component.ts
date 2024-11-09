import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {TestInputComponent} from './components/test-input/test-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, TestInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-generator';
}
