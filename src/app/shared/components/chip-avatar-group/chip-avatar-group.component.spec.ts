import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipAvatarGroupComponent } from './chip-avatar-group.component';

describe('ChipAvatarGroupComponent', () => {
  let component: ChipAvatarGroupComponent;
  let fixture: ComponentFixture<ChipAvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipAvatarGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipAvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
