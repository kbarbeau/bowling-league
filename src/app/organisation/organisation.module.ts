import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrganisationComponent } from './organisation.component';
import { OrganisationEditComponent } from './organisation-edit/organisation-edit.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { OrganisationSingleComponent } from './organisation-single/organisation-single.component';


@NgModule({
  declarations: [
    OrganisationComponent,
    OrganisationEditComponent,
    OrganisationListComponent,
    OrganisationSingleComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ]
})
export class OrganisationModule { }
