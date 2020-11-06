import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';




@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        HttpClientModule,
        CommonModule,
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }
