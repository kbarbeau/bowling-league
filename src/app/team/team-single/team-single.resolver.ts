import { Injectable } from '@angular/core';
import {
  doc,
  DocumentReference,
  Firestore,
  getDoc,
} from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { filter, from, map, Observable } from 'rxjs';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamSingleResolver implements Resolve<Team> {
  constructor(private firestore: Firestore) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Team> {
    const id: string = route.params['id'];
    const teamDocRef: DocumentReference<Team> = doc(
      this.firestore,
      'teams',
      id
    );

    return from(getDoc(teamDocRef)).pipe(
      filter((docSnap) => docSnap.exists()),
      map((docSnap) => Object.assign({}, docSnap.data(), { id }))
    );
  }
}
