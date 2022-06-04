import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserModel } from 'src/app/_models/register-user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  @Output() updateUser = new EventEmitter<RegisterUserModel>();

  updateForm: FormGroup;
  minDate = new Date(1900, 1, 1);

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', Validators.required],
      email: ['', Validators.email],
      cellphone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      dateOfBirth: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.updateForm.valid) {
      
    }
  }
}
