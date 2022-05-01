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
import { Team } from '../interfaces/team';
import { TeamModelService } from '../services/team-model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-team-list',
  styleUrls: ['./team-list.component.scss'],
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnDestroy, OnInit {
  @Input() editable: boolean = true; // Remove Add Button
  @Input() query: Query = query(
    collection(this.firestore, 'teams'),
    orderBy('name')
  ); // Allow use to create custom query
  @Input() showColumns: string[] = ['name', 'sport', 'players', 'actions']; // Used to show or hide columns

  public teams: Team[] = [];

  private teamSnapshotUnsubscribe: Unsubscribe;

  constructor(
    private cdr: ChangeDetectorRef,
    private firestore: Firestore,
    private TeamModelSvc: TeamModelService
  ) {}

  ngOnDestroy(): void {
    // Unsubscribe from snapshot
    this.teamSnapshotUnsubscribe();
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  setupObservers(): void {
    this.teamSnapshotUnsubscribe = onSnapshot(this.query, (querySnapshot) =>
      this.collectionHasChanged(querySnapshot)
    );
  }

  collectionHasChanged(querySnapshot: QuerySnapshot<Team>): void {
    let freshCollection: Team[] = [];
    querySnapshot.forEach(
      (doc: QueryDocumentSnapshot<Team>) =>
        (freshCollection = freshCollection.concat(
          this.TeamModelSvc.formatDocument(doc)
        ))
    );
    this.teams = freshCollection;
    this.cdr.markForCheck();
  }
}
