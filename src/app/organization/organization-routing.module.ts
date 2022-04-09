import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationComponent } from './organization.component';

const routes: Routes = [
  {
    children: [
      {
        component: OrganizationListComponent,
        path: '',
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
