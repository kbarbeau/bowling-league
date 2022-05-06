import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase/compat/app';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @Output() askToResetPassword: EventEmitter<boolean> = new EventEmitter();

  fg: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private auth: AngularFireAuth, private fb: FormBuilder) {}

  ngOnInit(): void {}

  login() {
    if (this.fg.valid) {
      this.auth
        .createUserWithEmailAndPassword(
          this.fg.value.email,
          this.fg.value.password
        )
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } else {
      // TODO :: Display error messages
    }
  }

  loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
