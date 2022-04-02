import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let player of player$ | async">
        {{ player.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bowling-league';
  player$: Observable<any[]>;
  constructor(firestore: Firestore) {
    const players = collection(firestore, 'players');
    this.player$ = collectionData(players);
  }
}
