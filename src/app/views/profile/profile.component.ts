import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly profileService: ProfileService
  ) {
    this.profileForm = this.formBuilder.group({
      id: [null],
      username: [null, [Validators.email, Validators.required, Validators.maxLength(80)]],
      password: [null, [Validators.required, Validators.maxLength(30)]],
      name: [null, [Validators.required, Validators.maxLength(80)]],
      cpf: [null, [Validators.required, Validators.maxLength(11)]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.maxLength(11)]]
    });
  }

  ngOnInit(): void {

    this.setAccount();
  }

  setAccount() {
    const user = JSON.parse(sessionStorage.getItem('user'))[0];
    console.log(user)
    this.profileForm.setValue({
      id: user.id,
      username: user.username,
      password: user.password,
      name: user.name,
      cpf: user.cpf,
      address: user.address,
      phone: user.phone
    })
  }

  update() {
    this.delete();
    this.profileService.update(this.profileForm.value).subscribe(
      res => {
        sessionStorage.removeItem('user');
        sessionStorage.setItem('user', JSON.stringify(this.profileForm.value));
        this.router.navigate(['/profile']);
      }
    )

  }

  delete() {
    this.profileService.delete(this.profileForm.get('id').value).subscribe()
  }

  deleteAccount(){
    this.delete();
    this.router.navigate(['/login'])
  }

  formValidator() {
    Object.keys(this.profileForm.controls).forEach(e => {
      this.profileForm.get(e).markAsDirty();
    });
  }

  fieldValidator(field: string): boolean {
    return !this.profileForm.get(field).valid &&
      (this.profileForm.get(field).touched || this.profileForm.get(field).dirty);
  }

}
