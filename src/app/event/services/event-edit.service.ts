import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventEditService {
  constructor(private fb: FormBuilder) {}

  initForm(event?: Event): FormGroup {
    return this.fb.group({
      awayTeam: [event?.awayTeam ?? ''],
      date: [event?.date ?? '', Validators.required],
      description: [event?.description ?? ''],
      homeTeam: [event?.homeTeam ?? ''],
      location: [event?.location ?? '', Validators.required],
      name: [event?.name ?? '', Validators.required],
      type: [event?.type ?? '', Validators.required],
    });
  }
}
