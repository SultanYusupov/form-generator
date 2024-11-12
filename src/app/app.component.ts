import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
      // let control: FormControl<string | null> | FormArray<FormControl<string | null>>;
      this.forms.forEach(el => {
        if (el.multiply) {
          // control = this.fb.array(el.options as string[], el.required ? Validators.required : null);
          const formArray: FormArray<FormControl<any>> = this.fb.array([]);
          this.testForm.addControl(el.inputName, formArray);
          const control: FormArray = this.testForm.get(el.inputName) as FormArray;
          control.push(this.fb.control(''));
        }
        else {
          const control: FormControl<string | null> = this.fb.control('', el.required ? Validators.required : null);
          this.testForm.addControl(el.inputName, control);
        }
      })

    });
  }

  createForm(form: FormGroup, forms: IForm[]) {

  }
}
