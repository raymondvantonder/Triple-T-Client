import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserModel } from 'src/app/_models/register-user-model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  @Output() registerUser = new EventEmitter<RegisterUserModel>();

  registerForm: FormGroup;
  minDate = new Date(1900, 1, 1);

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      cellphone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/)]],
      confirmPassword: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required]
    }, {
      validator: [this.mustMatch('password', 'confirmPassword')]
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      console.log(matchingControl.errors);
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        console.log('Not matching');
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {

    if (this.registerForm.valid) {
      const user: RegisterUserModel = {
        cellphone: this.registerForm.value.cellphone,
        dateOfBirth: this.registerForm.value.dateOfBirth,
        name: this.registerForm.value.name,
        surname: this.registerForm.value.surname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }

      this.registerUser.emit(user);
    }
  }
}
