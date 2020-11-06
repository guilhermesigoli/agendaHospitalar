import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() isLoggedIn = new EventEmitter();

  appName: string;
  isLoading: boolean;
  loginForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.appName = environment.appName;
    this.isLoading = false;
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.email, Validators.required, Validators.maxLength(80)]],
      password: [null, [Validators.required, Validators.maxLength(30)]],
    });
  }

  ngOnInit() {
    
  }

  login() {
    // if (!this.loginForm.valid) {
    //   this.formValidator();
    //   return;
    // }
    // this.isLoading = true;
    // this.loginService.login(this.loginForm.value).subscribe(
    //   response => {
    //     sessionStorage.setItem('username', response.employee.username);
    //     this.authService.initSession(response.token);
    //     this.isLoggedIn.emit();
    //     this.router.navigate(['/']);
    //   },
    //   (httpError: HttpErrorResponse) => {
    //     this.errorService.setError(ErrorMap.get(httpError.error.errorCode));

    //   }).add(() => {
    //     this.isLoading = false;
    //   });
  }

  formValidator() {
    Object.keys(this.loginForm.controls).forEach(e => {
      this.loginForm.get(e).markAsDirty();
    });
  }

  fieldValidator(field: string): boolean {
    return !this.loginForm.get(field).valid &&
      (this.loginForm.get(field).touched || this.loginForm.get(field).dirty);
  }
}
