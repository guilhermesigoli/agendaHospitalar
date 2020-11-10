import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() isLoggedIn = new EventEmitter();

  appName: string;
  isLoading: boolean;
  registerForm: FormGroup = null;
  showError = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.appName = environment.appName;
    this.isLoading = false;
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required, Validators.maxLength(80)]],
      password: [null, [Validators.required, Validators.maxLength(30)]],
      name: [null, [Validators.email, Validators.required, Validators.maxLength(80)]],
      cpf: [null, [Validators.required, Validators.maxLength(11)]],
      address: [null, [Validators.required]],
      phone: [null, Validators.required, Validators.maxLength(11)]
    });
  }

  ngOnInit() {
    console.log('ola')
  }

  register() {
    //   if (!this.registerForm.valid) {
    //     this.formValidator();
    //     return;
    //   }
    //   this.isLoading = true;
    //   // this.loginService.login(this.loginForm.value).subscribe(
    //   //   (response: []) => {
    //   //     if(response.length === 0){
    //   //       this.showError = true;
    //   //     }
    //   //     this.isLoggedIn.emit();
    //   //     this.router.navigate(['/']);
    //   //   }).add(() => {
    //   //     this.isLoading = false;
    //   //   });
  }

  // formValidator() {
  //   Object.keys(this.registerForm.controls).forEach(e => {
  //     this.registerForm.get(e).markAsDirty();
  //   });
  // }

  fieldValidator(field: string): boolean {
    return !this.registerForm.get(field).valid &&
      (this.registerForm.get(field).touched || this.registerForm.get(field).dirty);
  }
}
