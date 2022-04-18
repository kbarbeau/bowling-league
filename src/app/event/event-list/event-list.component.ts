import { Component, Input, OnInit } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  @Input() showColumns: string[] = ['date', 'name', 'type', 'actions']; // Used to show or hide columns

  events: Observable<DocumentData[]>;

  constructor(firestore: Firestore) {
    const ref: CollectionReference<DocumentData> = collection(
      firestore,
      'events'
    );
    this.events = collectionData(ref, { idField: 'id' });
  }

  ngOnInit(): void {}
}
