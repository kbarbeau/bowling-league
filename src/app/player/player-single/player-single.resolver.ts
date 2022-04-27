import { Injectable } from '@angular/core';
import {
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDoc,
  getFirestore,
} from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { filter, from, map, Observable } from 'rxjs';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerSingleResolver implements Resolve<Player> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<Player> {
    const db: Firestore = getFirestore();
    const id: string = route.params['id'];
    const playerDocRef: DocumentReference<DocumentData> = doc(
      db,
      'players',
      id
    );

    return from(getDoc(playerDocRef)).pipe(
      filter((docSnap) => docSnap.exists()),
      map((docSnap) => Object.assign({}, docSnap.data(), { id }))
    );
  }
}
