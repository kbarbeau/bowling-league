import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  collection,
  Firestore,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Player } from '../interfaces/player';
import { PlayerModelService } from '../services/player-model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-player-list',
  styleUrls: ['./player-list.component.scss'],
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnDestroy, OnInit {
  @Input() showColumns: string[] = ['name', 'actions']; // Used to show or hide columns

  public players: Player[];
  private playerSnapshotUnsubscribe: Unsubscribe;

  constructor(
    private cdr: ChangeDetectorRef,
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
      query(collection(this.firestore, 'players'), orderBy('name')),
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
    this.cdr.markForCheck();
  }
}
