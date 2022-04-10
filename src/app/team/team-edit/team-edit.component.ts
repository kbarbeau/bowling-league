import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { addDoc, collection } from 'firebase/firestore';
import { TeamEditService } from '../services/team-edit.service';

@Component({
  selector: 'app-team-edit',
  styleUrls: ['./team-edit.component.scss'],
  templateUrl: './team-edit.component.html',
})
export class TeamEditComponent implements OnInit {
  fg: FormGroup = this.TeamEditSvc.initForm();
  teamsCollection;

  constructor(
    private firestore: Firestore,
    private TeamEditSvc: TeamEditService
  ) {
    this.teamsCollection = collection(this.firestore, 'teams');
  }

  ngOnInit(): void {}

  onSubmit(): void {
    addDoc(this.teamsCollection, this.fg.value);
  }
}
