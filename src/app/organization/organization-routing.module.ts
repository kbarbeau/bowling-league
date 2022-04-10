import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationSingleComponent } from './organization-single/organization-single.component';
import { OrganizationComponent } from './organization.component';

const routes: Routes = [
  {
    children: [
      {
        component: OrganizationListComponent,
        path: '',
      },
      {
        component: OrganizationEditComponent,
        path: 'add',
      },
      {
        component: OrganizationEditComponent,
        path: 'edit/:id',
      },
      {
        component: OrganizationSingleComponent,
        path: 'view/:id',
      },
    ],
    component: OrganizationComponent,
    path: 'organization',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule {}
