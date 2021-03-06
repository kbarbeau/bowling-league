import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    LoginComponent,
    ResetPasswordComponent,
  ],
  imports: [AuthRoutingModule, CommonModule, SharedModule],
})
export class AuthModule {}
