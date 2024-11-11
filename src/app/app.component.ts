import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TestInputComponent} from './components/test-input/test-input.component';
import {BackendService} from './services/backend.service';
import {IForm} from './interfaces/IForm';
import {NgForOf} from '@angular/common';
import {TestNumberComponent} from './components/test-number/test-number.component';
import {TestSelectComponent} from './components/test-select/test-select.component';
import {TestCheckboxComponent} from './components/test-checkbox/test-checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, TestInputComponent, NgForOf, TestNumberComponent, TestSelectComponent, TestCheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'form-generator';
  forms: IForm[] = [];
  iterator: any;
  bs = inject(BackendService);
  fb = inject(FormBuilder);
  testForm!: FormGroup; // массив forms может быть пустым, поэтому знак вопроса
  ngOnInit() {
    this.getForms();
    this.testForm = this.fb.group({});
  }

  getForms() {
    this.bs.getFormList().subscribe(data => {
      this.forms = data;
      // this.iterator = this.forms[0]['formList'][Symbol.iterator]();
      this.forms.forEach(el => {
        const control = this.fb.control('', el.required ? Validators.required : null);
        this.testForm.addControl(el.inputName, control);
      })

    });
  }
}
