import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamEditService {
  constructor(private fb: FormBuilder, private firestore: Firestore) {}

  formatForSave(fg): Team {
    return {
      description: fg.description,
      name: fg.name,
      players: fg.players,
      sport: fg.sport,
    };
  }

  initForm(team?: Team): FormGroup {
    return team
      ? this.fb.group({
          description: [team.description],
          name: [team.name, Validators.required],
          players: [team.players || [], Validators.required],
          sport: [team.sport, Validators.required],
        })
      : this.fb.group({
          description: [''],
          name: ['', Validators.required],
          players: [[], Validators.required],
          sport: ['bowling', Validators.required],
        });
  }
}
