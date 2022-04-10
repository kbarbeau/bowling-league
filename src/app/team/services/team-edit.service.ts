import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root',
})
export class TeamEditService {
  constructor(private fb: FormBuilder) {}

  initForm(team?: Team): FormGroup {
    return this.fb.group({
      description: [''],
      name: ['', Validators.required],
    });
  }
}
