import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import firebase from 'firebase/compat/app';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-sign-in',
  styleUrls: ['./sign-in.component.scss'],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  fg: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(
    private auth: AngularFireAuth,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  signIn() {
    if (this.fg.valid) {
      this.auth
        .createUserWithEmailAndPassword(
          this.fg.value.email,
          this.fg.value.password
        )
        .then((userInfo: firebase.auth.UserCredential) =>
          this.signInSuccess(userInfo)
        )
        .catch((err) => console.error(err));
    } else {
      // TODO :: Display error messages
    }
  }

  signInSuccess(userInfo?: firebase.auth.UserCredential): void {
    console.log(userInfo);
    this.dialog.closeAll();
  }

  signInWithGoogle() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userInfo: firebase.auth.UserCredential) =>
        this.signInSuccess(userInfo)
      );
  }

  logout() {
    this.auth.signOut();
  }
}
