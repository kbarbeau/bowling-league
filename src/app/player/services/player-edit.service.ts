import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerEditService {
  constructor(private fb: FormBuilder) {}

  initForm(player?: Player): FormGroup {
    return player
      ? this.fb.group({
          description: [player.description],
          image: [player.image],
          name: [player.name, Validators.required],
        })
      : this.fb.group({
          description: [''],
          image: [''],
          name: ['', Validators.required],
        });
  }
}
