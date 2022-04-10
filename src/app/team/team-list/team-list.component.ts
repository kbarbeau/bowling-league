import { Component, Input, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent implements OnInit {
  @Input() showColumns: string[] = ['name', 'actions']; // Used to show or hide columns

  teams: Observable<any>;

  constructor(firestore: Firestore) {
    const col = collection(firestore, 'teams');
    this.teams = collectionData(col);
  }

  ngOnInit(): void {}
}
