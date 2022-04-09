import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSingleComponent } from './organization-single.component';

describe('OrganizationSingleComponent', () => {
  let component: OrganizationSingleComponent;
  let fixture: ComponentFixture<OrganizationSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
