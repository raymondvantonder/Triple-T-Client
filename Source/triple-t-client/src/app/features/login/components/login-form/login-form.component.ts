import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUserModel } from 'src/app/_models/login-user-model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  @Output() loginUser = new EventEmitter<LoginUserModel>();
  
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user: LoginUserModel = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
      }

      this.loginUser.emit(user);
    }
  }

}
