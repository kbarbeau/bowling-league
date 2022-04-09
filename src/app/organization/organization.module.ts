import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationSingleComponent } from './organization-single/organization-single.component';
import { OrganizationComponent } from './organization.component';

@NgModule({
  declarations: [
    OrganizationSingleComponent,
    OrganizationEditComponent,
    OrganizationListComponent,
    OrganizationComponent,
  ],
  imports: [CommonModule, OrganizationRoutingModule, SharedModule],
})
export class OrganizationModule {}
