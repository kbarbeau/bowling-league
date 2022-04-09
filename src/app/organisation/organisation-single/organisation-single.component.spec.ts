import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationSingleComponent } from './organisation-single.component';

describe('OrganisationSingleComponent', () => {
  let component: OrganisationSingleComponent;
  let fixture: ComponentFixture<OrganisationSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
