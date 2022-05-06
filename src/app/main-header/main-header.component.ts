import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-header',
  styleUrls: ['./main-header.component.scss'],
  templateUrl: './main-header.component.html',
})
export class MainHeaderComponent {
  constructor(private dialog: MatDialog) {}

  openLoginPopup() {
    this.dialog.open(AuthComponent);
  }
}
