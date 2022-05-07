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
  Query,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Unsubscribe,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player/interfaces/player';
import { PlayerModelService } from 'src/app/player/services/player-model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-player-list',
  styleUrls: ['./player-list.component.scss'],
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnDestroy, OnInit {
  @Input() editable: boolean = true; // Remove Add Button
  @Input() query: Query = query(
    collection(this.firestore, 'players'),
    orderBy('name')
  ); // Allow use to create custom query
  @Input() showColumns: string[] = ['name', 'actions']; // Used to show or hide columns

  public players: Player[];
  private playerSnapshotUnsubscribe: Unsubscribe;

  constructor(
    private cdr: ChangeDetectorRef,
    private firestore: Firestore,
    private PlayerModelSvc: PlayerModelService,
    private route: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    // Unsubscribe from snapshot
    this.playerSnapshotUnsubscribe();
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  setupObservers(): void {
    this.playerSnapshotUnsubscribe = onSnapshot(this.query, (querySnapshot) =>
      this.collectionHasChanged(querySnapshot)
    );

    this.route.data.subscribe((res) => console.log(res));
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
