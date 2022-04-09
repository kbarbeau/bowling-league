import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Game manager';
  player$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const players = collection(firestore, 'players');
    this.player$ = collectionData(players);
  }
}
