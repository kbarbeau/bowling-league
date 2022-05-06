import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-auth',
  styleUrls: ['./auth.component.scss'],
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isResettingPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  askToResetPassword(isResetting: boolean): void {
    this.isResettingPassword = isResetting;
  }
}
