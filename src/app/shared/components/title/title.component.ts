import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-title',
  styleUrls: ['./title.component.scss'],
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  @Input() class: string;
  @Input() size: 'extra-large' | 'large' | 'medium' | 'small' = 'medium';
  @Input() type: 'subtitle' | 'title' = 'title';

  @HostBinding('class')
  get hostClasses(): string {
    return [
      ...(this.class ? [this.class] : []), // include existing classes
      ...(this.size ? [`title--size-${this.size}`] : []),
      ...(this.type ? [`title--type-${this.type}`] : []),
    ].join(' ');
  }

  constructor() {}

  ngOnInit(): void {}
}
