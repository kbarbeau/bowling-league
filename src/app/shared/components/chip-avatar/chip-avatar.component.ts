import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chip-avatar',
  styleUrls: ['./chip-avatar.component.scss'],
  templateUrl: './chip-avatar.component.html',
})
export class ChipAvatarComponent implements OnInit {
  @Input() class: string;
  @Input() radius: 'round' | 'square' = 'round';
  @Input() size: 'extra-large' | 'extra-small' | 'large' | 'medium' | 'small' =
    'medium';
  @Input() image: string;

  @HostBinding('class')
  get hostClasses(): string {
    return [
      ...(this.class ? [this.class] : []), // include existing classes
      ...(this.radius ? [`chip-avatar--radius-${this.radius}`] : []),
      ...(this.size ? [`chip-avatar--size-${this.size}`] : []),
    ].join(' ');
  }

  constructor() {}

  ngOnInit(): void {}
}
