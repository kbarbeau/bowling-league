import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthUser } from 'src/app/auth/interfaces/auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private loggedInUserChangesSubject = new Subject<AuthUser | null>();
  public loggedInUserChanges$: Observable<AuthUser | null> =
    this.loggedInUserChangesSubject.asObservable();

  public loggedInUser: AuthUser | null;
  private destroy$: Subject<boolean> = new Subject();

  constructor(auth: AngularFireAuth) {
    auth.authState
      .pipe(takeUntil(this.destroy$))
      .subscribe((authUser) => this.storeLoggedInUser(authUser));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public getLoggedInUser(): AuthUser {
    return this.loggedInUser;
  }

  private storeLoggedInUser(loggedInUser: any | null): void {
    console.log(loggedInUser, loggedInUser?.displayName);
    this.loggedInUser = loggedInUser
      ? {
          id: loggedInUser.uid,
          image: loggedInUser.photoURL,
          name: loggedInUser.displayName,
        }
      : null;
    this.loggedInUserChangesSubject.next(this.loggedInUser);
  }
}
