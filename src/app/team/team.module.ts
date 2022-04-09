import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamEditComponent } from './team-edit/team-edit.component';


@NgModule({
  declarations: [
    TeamComponent,
    TeamListComponent,
    TeamEditComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
