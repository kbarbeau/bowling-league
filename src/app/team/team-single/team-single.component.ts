import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  collection,
  documentId,
  Firestore,
  query,
  Query,
  where,
} from '@angular/fire/firestore';
import { ActivatedRoute, Data } from '@angular/router';
import { Team } from '../interfaces/team';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-team-single',
  styleUrls: ['./team-single.component.scss'],
  templateUrl: './team-single.component.html',
})
export class TeamSingleComponent implements OnInit {
  public playerQuery: Query;
  public team: Team;

  constructor(private firestore: Firestore, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setupObservers();
  }

  setupData(data: Data): void {
    this.team = data['resolverData'] as Team;
    this.playerQuery = query(
      collection(this.firestore, 'players'),
      where(documentId(), 'in', this.team.players)
    );
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }
}
