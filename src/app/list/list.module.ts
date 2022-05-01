import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetDownloadURLPipeModule } from '@angular/fire/compat/storage';
import { PlayerRoutingModule } from '../player/player-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TeamRoutingModule } from '../team/team-routing.module';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';

@NgModule({
  declarations: [PlayerListComponent, TeamListComponent],
  exports: [PlayerListComponent, TeamListComponent],
  imports: [
    CommonModule,
    GetDownloadURLPipeModule,
    PlayerRoutingModule,
    SharedModule,
    TeamRoutingModule,
  ],
})
export class ListModule {}
