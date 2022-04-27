import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidePanelModule } from '../side-panel/side-panel.module';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [EventComponent, EventListComponent, EventEditComponent],
  imports: [CommonModule, EventRoutingModule, SharedModule, SidePanelModule],
})
export class EventModule {}
