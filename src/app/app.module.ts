import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { SidePanelModule } from './side-panel/side-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainWrapperComponent,
    MainFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    SidePanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
