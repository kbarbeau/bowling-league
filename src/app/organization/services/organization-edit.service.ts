import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organization } from '../interfaces/organization';

@Injectable({
  providedIn: 'root',
})
export class OrganizationEditService {
  constructor(private fb: FormBuilder) {}

  initForm(organization?: Organization): FormGroup {
    return organization
      ? this.fb.group({
          description: [organization.description],
          email: [organization.email, [Validators.required, Validators.email]],
          location: [organization.location, Validators.required],
          phone: [organization.phone],
          name: [organization.name, Validators.required],
        })
      : this.fb.group({
          description: [''],
          email: ['', [Validators.required, Validators.email]],
          location: ['', Validators.required],
          phone: [''],
          name: ['', Validators.required],
        });
  }
}
