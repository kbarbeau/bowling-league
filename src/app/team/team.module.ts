import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidePanelModule } from '../side-panel/side-panel.module';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent, TeamListComponent, TeamEditComponent],
  exports: [TeamListComponent],
  imports: [CommonModule, SharedModule, SidePanelModule, TeamRoutingModule],
})
export class TeamModule {}
