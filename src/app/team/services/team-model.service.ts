import { Injectable } from '@angular/core';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamModelService {
  constructor() {}

  formatDocument(doc: QueryDocumentSnapshot<Team>): Team {
    return {
      description: doc.data().description,
      id: doc.id,
      players: doc.data().players,
      name: doc.data().name,
      sport: doc.data().sport,
    };
  }
}
