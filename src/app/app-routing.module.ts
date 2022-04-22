import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: MainMenuComponent,
    data: { sidePanelPos: 'start' },
    outlet: 'side',
    path: 'menu',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
