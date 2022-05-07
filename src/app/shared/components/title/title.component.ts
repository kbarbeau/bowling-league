import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-title',
  styleUrls: ['./title.component.scss'],
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  @Input() class: string;
  @Input() color: string; // Color code
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

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.color)
      this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
}
