import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-object-summary, [app-object-summary]',
  templateUrl: './object-summary.component.html',
  styleUrls: ['./object-summary.component.scss'],
})
export class ObjectSummaryComponent implements OnInit {
  @Input() class: string;
  @Input() direction: 'column' | 'row' = 'row';

  @HostBinding('class')
  get hostClasses(): string {
    return [
      ...(this.class ? [this.class] : []), // include existing classes
      ...(this.direction
        ? [`object-summary--direction-${this.direction}`]
        : []),
    ].join(' ');
  }

  constructor() {}

  ngOnInit(): void {}
}
