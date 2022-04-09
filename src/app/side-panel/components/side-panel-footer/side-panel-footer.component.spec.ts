import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelFooterComponent } from './side-panel-footer.component';

describe('SidePanelFooterComponent', () => {
  let component: SidePanelFooterComponent;
  let fixture: ComponentFixture<SidePanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePanelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
