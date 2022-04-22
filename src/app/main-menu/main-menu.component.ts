import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-menu',
  styleUrls: ['./main-menu.component.scss'],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent implements OnDestroy, OnInit {
  public itemSelector: FormControl = new FormControl();
  private destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.itemSelector.valueChanges
      .pipe(
        map((selections: string[]) => selections[0]),
        takeUntil(this.destroy$)
      )
      .subscribe((path: string) => this.redirectTo(path));
  }

  private redirectTo(path: string): void {
    this.router.navigateByUrl(`/${path}`);
  }
}
