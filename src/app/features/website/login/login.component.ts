import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { passwordValidator } from 'src/app/services/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errMsg: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), passwordValidator]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errMsg = ['Please fill in all required fields correctly.'];
      // this.toastr.error('Please fill in all required fields correctly.', 'Error');
      return;
    }
    this.toastr.success('Login successful!', 'Success');
    this.router.navigate(['admin/dashboard']);
  }
  navigateToSignup(){
    this.router.navigate(['therapix/register']);
  }
  
}
