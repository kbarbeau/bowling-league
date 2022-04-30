import {
  ChangeDetectionStrategy,
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
import { Team } from '../interfaces/team';
import { TeamModelService } from '../services/team-model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-team-list',
  styleUrls: ['./team-list.component.scss'],
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnDestroy, OnInit {
  @Input() showColumns: string[] = ['name', 'sport', 'players', 'actions']; // Used to show or hide columns

  public teams: Team[] = [];

  private teamSnapshotUnsubscribe: Unsubscribe;

  constructor(
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
    this.teamSnapshotUnsubscribe = onSnapshot(
      query(collection(this.firestore, 'teams'), orderBy('name')),
      (querySnapshot) => this.collectionHasChanged(querySnapshot)
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
  }
}
