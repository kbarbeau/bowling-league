import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamEditService {
  constructor(private fb: FormBuilder) {}

  initForm(team?: Team): FormGroup {
    return team
      ? this.fb.group({
          description: [team.description],
          name: [team.name, Validators.required],
          sport: [team.sport, Validators.required],
        })
      : this.fb.group({
          description: [''],
          name: ['', Validators.required],
          sport: ['', Validators.required],
        });
  }
}
