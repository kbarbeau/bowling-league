import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventModule } from './event/event.module';
import { HomeComponent } from './home/home.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { OrganizationModule } from './organization/organization.module';
import { PlayerModule } from './player/player.module';
import { SharedModule } from './shared/shared.module';
import { SidePanelModule } from './side-panel/side-panel.module';
import { TeamModule } from './team/team.module';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainMenuComponent,
    MainWrapperComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    EventModule,
    OrganizationModule,
    PlayerModule,
    SharedModule,
    SidePanelModule,
    TeamModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }, // Present Input error only if input is dirty and invalid
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }, // Used for AngularFireStorage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
