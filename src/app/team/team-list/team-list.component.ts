import { Component, Input, OnInit } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';

@Component({
  selector: 'app-team-list',
  styleUrls: ['./team-list.component.scss'],
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {
  @Input() showColumns: string[] = ['name', 'sport', 'players', 'actions']; // Used to show or hide columns

  public teams: Team[] = [];
  public teams$: Observable<Team[]>;

  private teamsColRef: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {}

  ngOnInit(): void {
    this.setupDataBase();
    this.setupTeams();
  }

  setupDataBase(): void {
    const db: Firestore = getFirestore();
    this.teamsColRef = collection(db, 'teams');
  }

  setupTeams(): void {
    const teamsQuery = query(this.teamsColRef, orderBy('name'));

    onSnapshot(teamsQuery, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.teams = this.teams.concat({ ...doc.data(), id: doc.id });
      });
    });
  }
}
