import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerSingleComponent } from './player-single/player-single.component';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  {
    children: [
      {
        component: PlayerListComponent,
        path: '',
      },
    ],
    component: PlayerComponent,
    path: 'player',
  },
  {
    children: [
      {
        component: PlayerEditComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'add',
      },
      {
        component: PlayerEditComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'edit/:id',
      },
      {
        component: PlayerSingleComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'single/:id',
      },
    ],
    component: PlayerComponent,
    outlet: 'side',
    path: 'player',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
