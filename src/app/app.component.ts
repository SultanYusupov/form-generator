import {ApplicationRef, Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl, FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {TestInputComponent} from './components/test-input/test-input.component';
import {BackendService} from './services/backend.service';
import {IForm} from './interfaces/IForm';
import {NgForOf, NgIf} from '@angular/common';
import {TestNumberComponent} from './components/test-number/test-number.component';
import {TestSelectComponent} from './components/test-select/test-select.component';
import {TestCheckboxComponent} from './components/test-checkbox/test-checkbox.component';
import {AddButtonComponent} from './components/add-button/add-button.component';
import {RemoveButtonComponent} from './components/remove-button/remove-button.component';
import {SubmitButtonComponent} from './components/submit-button/submit-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, TestInputComponent, NgForOf, TestNumberComponent, TestSelectComponent, TestCheckboxComponent, AddButtonComponent, NgIf, RemoveButtonComponent, SubmitButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'form-generator';
  forms: IForm[] = [];
  bs = inject(BackendService);
  fb = inject(FormBuilder);
  private appRef = inject(ApplicationRef);
  testForm!: FormGroup; // массив forms может быть пустым, поэтому знак вопроса
  ngOnInit() {
    this.getForms();
    this.testForm = this.fb.group({});
  }

  getForms() {
    this.bs.getFormList().subscribe(data => {
      this.forms = data;
    });
  }

  addFormControl(inputName: string, value:string = '') {
    (this.testForm.get(inputName) as FormArray).push(this.fb.control(value));
  }

  deleteFormControl(obj: {inputName: string, index: number}) {
    const control = this.testForm.get(obj.inputName) as FormArray;
    control.removeAt(obj.index);
  }

  submitForm() {
    console.log(this.testForm);
  }
}
