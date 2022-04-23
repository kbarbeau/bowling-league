import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  {
    children: [
      {
        component: PlayerListComponent,
        path: '',
      },
      {
        component: PlayerEditComponent,
        path: 'add',
      },
      {
        component: PlayerEditComponent,
        path: 'edit/:id',
      },
    ],
    component: PlayerComponent,
    path: 'player',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
