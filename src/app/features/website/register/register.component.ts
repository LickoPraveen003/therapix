import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { customEmailValidator } from 'src/app/services/email-validator';
import { passwordValidator } from 'src/app/services/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup; 
  errMsg: string[] = [];
  passwordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';
  isUser:boolean = false;
  role = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, customEmailValidator]],
      phoneno: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), passwordValidator]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), passwordValidator]],
      termsAndConditions: [false, [Validators.requiredTrue]]
    }, { validators: [this.passwordMatchValidator] });
  }
  

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  togglePasswordVisibility(type:any) {
    if(type == "password"){
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
    if(type == "confirmPassword"){
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
    }
  }
  openSignupForm(role:any){
    this.isUser = true;
    if(role == 'Parents'){
      this.role = 'Parents';
    }
    else if((role == 'Teachers')){
      this.role = 'Teachers';
    }
    else if((role == 'Therapist')){
      this.role = 'Therapist';
    }
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      this.errMsg = ['Please fill in all required fields correctly.'];
      return;
    }

    this.toastr.success('Sign-up successful!', 'Success');
    this.router.navigate(['therapix/login']);
  }
}
