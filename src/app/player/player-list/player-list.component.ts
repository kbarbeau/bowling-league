import { Component, Input, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  @Input() showColumns: string[] = ['name', 'actions']; // Used to show or hide columns

  players: Observable<any>;

  constructor(firestore: Firestore) {
    const ref = collection(firestore, 'players');
    this.players = collectionData(ref, { idField: 'id' });
  }

  ngOnInit(): void {}
}
