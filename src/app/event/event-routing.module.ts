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
      {
        component: EventEditComponent,
        path: 'add',
      },
      {
        component: EventEditComponent,
        path: 'edit/:id',
      },
    ],
    component: EventComponent,
    path: 'event',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
