import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Subject, takeUntil } from 'rxjs';

const DEFAULT_SIDE_PANEL_MODE: 'over' | 'push' | 'side' = 'over';
const DEFAULT_SIDE_PANEL_POS: 'end' | 'start' = 'end';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('drawer', { static: true }) drawer;

  destroy$: Subject<boolean> = new Subject();
  title = 'Game manager';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.drawer.openedChange
      .pipe(
        filter((open) => !open),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.router.navigate(['', { outlets: { side: null } }]));

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route: ActivatedRoute) =>
          // Check if side outlet should be open
          route.children.find(
            (child: ActivatedRoute) => child.outlet === 'side'
          )
        )
      )
      .subscribe((sideRoute: ActivatedRoute) =>
        this.setupSidePanelOptions(sideRoute)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setupSidePanelOptions(sideRoute: ActivatedRoute): void {
    if (sideRoute) {
      const routeData = (sideRoute.data as any).value;

      this.drawer.mode = routeData.sidePanelMode || DEFAULT_SIDE_PANEL_MODE;
      this.drawer.position = routeData.sidePanelPos || DEFAULT_SIDE_PANEL_POS;

      this.drawer.open();
    } else {
      this.drawer.close();
    }

    this.cdr.markForCheck();
  }
}
