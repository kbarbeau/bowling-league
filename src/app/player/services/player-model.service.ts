import { Injectable } from '@angular/core';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerModelService {
  constructor() {}

  formatDocument(doc: QueryDocumentSnapshot<Player>): Player {
    return {
      description: doc.data().description,
      id: doc.id,
      image: doc.data().image,
      name: doc.data().name,
    };
  }
}
