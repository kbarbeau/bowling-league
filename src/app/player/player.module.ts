import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';



@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
