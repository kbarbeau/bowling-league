import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListModule } from '../list/list.module';
import { SharedModule } from '../shared/shared.module';
import { SidePanelModule } from '../side-panel/side-panel.module';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamSingleComponent } from './team-single/team-single.component';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent, TeamEditComponent, TeamSingleComponent],
  imports: [
    CommonModule,
    ListModule,
    SharedModule,
    SidePanelModule,
    TeamRoutingModule,
  ],
})
export class TeamModule {}
