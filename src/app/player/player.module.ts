import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetDownloadURLPipeModule } from '@angular/fire/compat/storage';
import { SharedModule } from '../shared/shared.module';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [PlayerEditComponent, PlayerListComponent, PlayerComponent],
  imports: [
    CommonModule,
    GetDownloadURLPipeModule,
    PlayerRoutingModule,
    SharedModule,
  ],
})
export class PlayerModule {}
