import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetDownloadURLPipeModule } from '@angular/fire/compat/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActionsGroupComponent } from './actions-group/actions-group.component';
import { ChipAvatarGroupComponent } from './components/chip-avatar-group/chip-avatar-group.component';
import { ChipAvatarComponent } from './components/chip-avatar/chip-avatar.component';
import { ObjectSummaryComponent } from './components/object-summary/object-summary.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    ActionsGroupComponent,
    ChipAvatarComponent,
    ChipAvatarGroupComponent,
    ObjectSummaryComponent,
    TitleComponent,
  ],
  exports: [
    ActionsGroupComponent,
    ChipAvatarComponent,
    ChipAvatarGroupComponent,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ObjectSummaryComponent,
    ReactiveFormsModule,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GetDownloadURLPipeModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
