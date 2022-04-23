import { Component, OnInit } from '@angular/core';
import { doc, Firestore, onSnapshot } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore';
import { TSport } from '../interfaces/team';
import { TeamEditService } from '../services/team-edit.service';

@Component({
  selector: 'app-team-edit',
  styleUrls: ['./team-edit.component.scss'],
  templateUrl: './team-edit.component.html',
})
export class TeamEditComponent implements OnInit {
  fg: FormGroup;
  id?: string = '';
  pageTitle: string = '';
  sports: TSport[] = ['baseball', 'bowling', 'hockey'];
  teamDocument: DocumentReference<DocumentData>;
  teamsCollection: CollectionReference<DocumentData>;

  constructor(
    private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    private TeamEditSvc: TeamEditService
  ) {
    this.teamsCollection = collection(this.firestore, 'teams');
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  setupData(params: Params): void {
    if (params['id']) {
      this.setupDocument(params['id']);
    } else {
      this.fg = this.TeamEditSvc.initForm();
      this.pageTitle = 'Create a Team';
    }
  }

  setupDocument(id: string): void {
    this.id = id;
    this.pageTitle = 'Edit Team';
    this.teamDocument = doc(this.firestore, `teams/${this.id}`);

    onSnapshot(
      this.teamDocument,
      (docSnap) => (this.fg = this.TeamEditSvc.initForm(docSnap.data()))
    );
  }

  setupObservers(): void {
    this.route.params.subscribe((params) => this.setupData(params));
  }

  onSubmit(): void {
    this.id
      ? updateDoc(this.teamDocument, this.fg?.value)
      : addDoc(this.teamsCollection, this.fg?.value);

    this.router.navigate(['/team']);
  }
}
