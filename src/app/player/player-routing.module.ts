import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from '../list/components/player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerEditResolver } from './player-edit/player-edit.resolver';
import { PlayerSingleComponent } from './player-single/player-single.component';
import { PlayerSingleResolver } from './player-single/player-single.resolver';
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
        resolve: { resolverData: PlayerEditResolver },
      },
      {
        component: PlayerSingleComponent,
        data: { sidePanelMode: 'over', sidePanelPos: 'end' },
        path: 'single/:id',
        resolve: { resolverData: PlayerSingleResolver },
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
