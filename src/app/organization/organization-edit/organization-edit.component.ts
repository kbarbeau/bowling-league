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
import { Organization } from '../interfaces/organization';
import { OrganizationEditService } from '../services/organization-edit.service';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss'],
})
export class OrganizationEditComponent implements OnInit {
  fg: FormGroup;
  id?: string = '';
  pageTitle: string = '';
  organizationDocument: DocumentReference<DocumentData>;
  organizationCollection: CollectionReference<DocumentData>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore,
    private OrganizationEditSvc: OrganizationEditService
  ) {
    this.organizationCollection = collection(this.firestore, 'teams');
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  setupData(params: Params): void {
    if (params['id']) {
      this.setupDocument(params['id']);
    } else {
      this.fg = this.OrganizationEditSvc.initForm();
      this.pageTitle = 'Create an Organization';
    }
  }

  setupDocument(id: string): void {
    this.id = id;
    this.pageTitle = 'Edit Organization';
    this.organizationDocument = doc(this.firestore, `organizations/${this.id}`);

    onSnapshot(
      this.organizationDocument,
      (docSnap) =>
        (this.fg = this.OrganizationEditSvc.initForm(
          docSnap.data() as Organization
        ))
    );
  }

  setupObservers(): void {
    this.route.params.subscribe((params) => this.setupData(params));
  }

  onSubmit(): void {
    this.id
      ? updateDoc(this.organizationDocument, this.fg?.value)
      : addDoc(this.organizationCollection, this.fg?.value);

    this.router.navigate(['/organization']);
  }
}
