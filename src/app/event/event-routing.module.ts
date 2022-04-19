import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event.component';

const routes: Routes = [
  {
    children: [
      {
        component: EventListComponent,
        path: '',
      },
    ],
    component: EventComponent,
    path: 'event',
  },
  {
    component: EventEditComponent,
    data: { sidePanelMode: 'over', sidePanelPos: 'end' },
    outlet: 'side',
    path: 'event/add',
  },
  {
    component: EventEditComponent,
    data: { sidePanelMode: 'over', sidePanelPos: 'end' },
    outlet: 'side',
    path: 'event/edit/:id',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
