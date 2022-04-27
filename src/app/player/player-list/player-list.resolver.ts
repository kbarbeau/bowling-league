import { Injectable } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { Resolve } from '@angular/router';
import { collection } from 'firebase/firestore';
import { filter, from, map, Observable } from 'rxjs';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerListResolver implements Resolve<Player[]> {
  constructor(private firestore: Firestore) {}

  resolve(): Observable<Player[]> {
    const playerColRef = collection(this.firestore, 'players');

    return from(getDocs(playerColRef)).pipe(
      filter((snapshot) => !snapshot.empty),
      map((snapshot) =>
        snapshot.docs.map((doc) =>
          Object.assign({}, doc.data(), { id: doc.id })
        )
      )
    );
  }
}
