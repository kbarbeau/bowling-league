import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from '../list/components/team-list/team-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamEditResolver } from './team-edit/team-edit.resolver';
import { TeamSingleComponent } from './team-single/team-single.component';
import { TeamSingleResolver } from './team-single/team-single.resolver';
import { TeamComponent } from './team.component';

const routes: Routes = [
  {
    children: [
      {
        component: TeamListComponent,
        path: '',
      },
    ],
    component: TeamComponent,
    path: 'team',
  },
  {
    children: [
      {
        component: TeamEditComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'add',
      },
      {
        component: TeamEditComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'edit/:id',
        resolve: { resolverData: TeamEditResolver },
      },
      {
        component: TeamSingleComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'single/:id',
        resolve: { resolverData: TeamSingleResolver },
      },
    ],
    component: TeamComponent,
    outlet: 'side',
    path: 'team',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
