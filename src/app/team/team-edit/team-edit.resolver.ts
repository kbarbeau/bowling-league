import { Injectable } from '@angular/core';
import {
  doc,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  getDoc,
} from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { filter, from, map, Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { TeamModelService } from '../services/team-model.service';

@Injectable({
  providedIn: 'root',
})
export class TeamEditResolver implements Resolve<Team> {
  constructor(
    private firestore: Firestore,
    private TeamModelSvc: TeamModelService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Team> {
    const id: string = route.params['id'];
    const teamDocRef: DocumentReference<Team> = doc(
      this.firestore,
      'teams',
      id
    );

    return from(getDoc(teamDocRef)).pipe(
      filter((docSnap) => docSnap.exists()),
      map((doc: DocumentSnapshot<Team>) =>
        this.TeamModelSvc.formatDocument(doc)
      )
    );
  }
}
