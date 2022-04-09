import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player.component';


@NgModule({
  declarations: [
    PlayerEditComponent,
    PlayerListComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
