import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ActionsGroupComponent } from './actions-group/actions-group.component';

@NgModule({
  declarations: [ActionsGroupComponent],
  exports: [
    ActionsGroupComponent,
    MatButtonModule,
    MatListModule,
    MatTableModule,
  ],
  imports: [CommonModule, MatButtonModule, MatListModule, MatTableModule],
})
export class SharedModule {}
