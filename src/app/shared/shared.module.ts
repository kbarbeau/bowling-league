import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ActionsGroupComponent } from './actions-group/actions-group.component';

@NgModule({
  declarations: [ActionsGroupComponent],
  exports: [
    ActionsGroupComponent,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
