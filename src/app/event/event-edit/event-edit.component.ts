import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventEditService } from '../services/event-edit.service';
import { START_DATE_MAX, START_DATE_MIN } from './event-edit.constant';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent implements OnInit {
  eventsCollection: CollectionReference<DocumentData>;
  eventDocument: DocumentReference<DocumentData>;
  fg: FormGroup;
  id?: string = '';
  pageTitle: string = '';
  startDateMax: string = START_DATE_MAX;
  startDateMin: string = START_DATE_MIN;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore,
    private EventEditSvc: EventEditService
  ) {
    this.eventsCollection = collection(this.firestore, 'events');
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  setupData(params: Params): void {
    if (params['id']) {
      this.setupDocument(params['id']);
    } else {
      this.fg = this.EventEditSvc.initForm();
      this.pageTitle = 'Create an Event';
    }
  }

  setupDocument(id: string): void {
    this.id = id;
    this.pageTitle = 'Edit Event';
    this.eventDocument = doc(this.firestore, `events/${this.id}`);

    onSnapshot(
      this.eventDocument,
      (docSnap) => (this.fg = this.EventEditSvc.initForm(docSnap.data()))
    );
  }

  setupObservers(): void {
    this.route.params.subscribe((params) => this.setupData(params));
  }

  onSubmit(): void {
    this.id
      ? updateDoc(this.eventDocument, this.fg?.value)
      : addDoc(this.eventsCollection, this.fg?.value);

    this.router.navigate(['', { outlets: { side: null } }]);
  }
}
