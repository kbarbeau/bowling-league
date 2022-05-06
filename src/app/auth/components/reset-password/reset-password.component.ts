import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-reset-password',
  styleUrls: ['./reset-password.component.scss'],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  @Output() askToResetPassword: EventEmitter<boolean> = new EventEmitter();

  fg: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private auth: AngularFireAuth, private fb: FormBuilder) {}

  sendPassword(): void {
    this.auth.sendPasswordResetEmail(this.fg.value.email);
  }
}
