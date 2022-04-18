import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateTime } from 'luxon';
import { Event } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventEditService {
  constructor(private fb: FormBuilder) {}

  initForm(event?: Event): FormGroup {
    const dateDefault: string = [
      DateTime.local().toFormat('yyyy-MM-dd'),
      '18:00',
    ].join('T');

    return this.fb.group({
      awayTeam: [event?.awayTeam ?? ''],
      date: [event?.date ?? dateDefault, Validators.required],
      description: [event?.description ?? ''],
      homeTeam: [event?.homeTeam ?? ''],
      location: [event?.location ?? '', Validators.required],
      name: [event?.name ?? '', Validators.required],
      type: [event?.type ?? '', Validators.required],
    });
  }
}
