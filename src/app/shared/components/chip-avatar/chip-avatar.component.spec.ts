import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipAvatarComponent } from './chip-avatar.component';

describe('ChipAvatarComponent', () => {
  let component: ChipAvatarComponent;
  let fixture: ComponentFixture<ChipAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
