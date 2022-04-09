import { Component, OnInit } from '@angular/core';
import {
  collection,
  collectionData,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
})
export class OrganizationListComponent implements OnInit {
  organization$: Observable<DocumentData[]>;
  test: any;

  constructor(firestore: Firestore) {
    const organizations = collection(firestore, 'organizations');
    this.organization$ = collectionData(organizations);
  }

  ngOnInit(): void {
    this.organization$.subscribe((res) => (this.test = res));
  }
}
