import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSingleComponent } from './player-single.component';

describe('PlayerSingleComponent', () => {
  let component: PlayerSingleComponent;
  let fixture: ComponentFixture<PlayerSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
