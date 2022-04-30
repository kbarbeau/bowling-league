import { Injectable } from '@angular/core';
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  Firestore,
  getDoc,
} from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { filter, from, map, Observable } from 'rxjs';
import { Player } from '../interfaces/player';
import { PlayerModelService } from '../services/player-model.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerEditResolver implements Resolve<Player> {
  constructor(
    private firestore: Firestore,
    private PlayerModelSvc: PlayerModelService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Player> {
    const id: string = route.params['id'];
    const playerDocRef: DocumentReference<DocumentData> = doc(
      this.firestore,
      'players',
      id
    );

    return from(getDoc(playerDocRef)).pipe(
      filter((docSnap) => docSnap.exists()),
      map((doc: DocumentSnapshot<Player>) =>
        this.PlayerModelSvc.formatDocument(doc)
      )
    );
  }
}
