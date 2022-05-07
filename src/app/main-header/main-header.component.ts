import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { AuthComponent } from '../auth/auth.component';
import { AuthUser } from '../auth/interfaces/auth-user';
import { AuthService } from '../shared/services/auth.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-header',
  styleUrls: ['./main-header.component.scss'],
  templateUrl: './main-header.component.html',
})
export class MainHeaderComponent implements OnDestroy, OnInit {
  public user: AuthUser | null;
  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private auth: AngularFireAuth,
    private AuthSvc: AuthService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  loggedInUserHasChanged(user: AuthUser | null): void {
    this.user = user;
    this.cdr.markForCheck();
  }

  logout(): void {
    this.auth.signOut();
  }

  openLoginPopup() {
    this.dialog.open(AuthComponent);
  }

  setupObservers(): void {
    this.AuthSvc.loggedInUserChanges$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => this.loggedInUserHasChanged(user));
  }
}
