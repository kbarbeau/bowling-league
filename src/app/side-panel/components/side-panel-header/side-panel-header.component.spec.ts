import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelHeaderComponent } from './side-panel-header.component';

describe('SidePanelHeaderComponent', () => {
  let component: SidePanelHeaderComponent;
  let fixture: ComponentFixture<SidePanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePanelHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
