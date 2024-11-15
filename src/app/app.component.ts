import {
  ChangeDetectorRef,
  Component,
  inject,
  OnInit
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
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
  private cdr = inject(ChangeDetectorRef);
  testForm!: FormGroup; // массив forms может быть пустым, поэтому знак вопроса
  ngOnInit() {
    this.getForms();
    this.testForm = this.fb.group({});
  }

  createForm() {
    this.forms.forEach((form: IForm) => {
      if (form.type == 'text' || form.type == 'number') {

        if (form.multiply) {
          this.testForm.addControl(form.inputName, new FormArray([], form.required ? Validators.required : null));
          const controlArray = this.testForm.get(form.inputName) as FormArray;
          controlArray.push(new FormControl(''))
        }
        else {
          this.testForm.addControl(form.inputName, new FormControl('', form.required ? Validators.required : null))
        }
      }

      else if (form.type == 'select') {
        if (form.multiply) {
          this.testForm.addControl(form.inputName, new FormArray([], form.required ? Validators.required : null));
          (this.testForm.get(form.inputName) as FormArray).push(new FormControl(''));
        }
        else {
          this.testForm.addControl(form.inputName, new FormControl('', form.required ? Validators.required : null));
        }
      }

      else if (form.type == 'checkbox') {
        this.testForm.addControl(form.inputName, new FormArray([], form.required ? Validators.required : null));
      }
    })
  }

  getForms() {
    this.bs.getFormList().subscribe(data => {
      this.forms = data;
      this.createForm();
    });
  }

  get validForm() {
    return this.testForm.valid;
  }

  addFormControl(inputName: string, value:string = '') {
    (this.testForm.get(inputName) as FormArray).push(this.fb.control(value));
  }

  deleteFormControl(obj: {inputName: string, index: number}) {
    const control = this.testForm.get(obj.inputName) as FormArray;
    control.removeAt(obj.index);
  }

  submitForm() {
    console.log(this.validForm);
    console.log(this.testForm);
  }
}
