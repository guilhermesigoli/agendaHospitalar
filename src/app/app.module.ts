import { ProfileService } from './views/profile/profile.service';
import { DocsListService } from './views/docs-list/docs-list.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { LoginService } from './views/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterService } from './views/register/register.service';
import { DocsListComponent } from './views/docs-list/docs-list.component';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './views/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DocsListComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [RegisterService, LoginService, DocsListService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
