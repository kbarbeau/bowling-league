import { Component, Input, OnInit } from '@angular/core';
import {
  collection,
  Firestore,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Player } from '../interfaces/player';
import { PlayerModelService } from '../services/player-model.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  @Input() showColumns: string[] = ['name', 'actions']; // Used to show or hide columns

  public players: Player[];
  private playerSnapshotUnsubscribe: Unsubscribe;

  constructor(
    private firestore: Firestore,
    private PlayerModelSvc: PlayerModelService
  ) {}

  ngOnDestroy(): void {
    // Unsubscribe from snapshot
    this.playerSnapshotUnsubscribe();
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  setupObservers(): void {
    this.playerSnapshotUnsubscribe = onSnapshot(
      query(collection(this.firestore, 'players')),
      (querySnapshot) => this.collectionHasChanged(querySnapshot)
    );
  }

  collectionHasChanged(querySnapshot: QuerySnapshot<Player>): void {
    let freshCollection: Player[] = [];
    querySnapshot.forEach(
      (doc: QueryDocumentSnapshot<Player>) =>
        (freshCollection = freshCollection.concat(
          this.PlayerModelSvc.formatDocument(doc)
        ))
    );
    this.players = freshCollection;
  }
}
