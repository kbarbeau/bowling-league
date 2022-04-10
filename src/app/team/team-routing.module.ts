import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team.component';

const routes: Routes = [
  {
    children: [
      {
        component: TeamListComponent,
        path: '',
      },
      {
        component: TeamEditComponent,
        path: 'add',
      },
      {
        component: TeamEditComponent,
        path: 'edit/:id',
      },
    ],
    component: TeamComponent,
    path: 'team',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
