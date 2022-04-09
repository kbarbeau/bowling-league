import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidePanelContentComponent } from './components/side-panel-content/side-panel-content.component';
import { SidePanelFooterComponent } from './components/side-panel-footer/side-panel-footer.component';
import { SidePanelHeaderComponent } from './components/side-panel-header/side-panel-header.component';
import { SidePanelComponent } from './side-panel.component';

@NgModule({
  declarations: [
    SidePanelHeaderComponent,
    SidePanelContentComponent,
    SidePanelFooterComponent,
    SidePanelComponent,
  ],
  exports: [MatSidenavModule],
  imports: [CommonModule, MatSidenavModule],
})
export class SidePanelModule {}
