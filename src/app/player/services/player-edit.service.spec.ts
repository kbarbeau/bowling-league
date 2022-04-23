import { TestBed } from '@angular/core/testing';

import { PlayerEditService } from './player-edit.service';

describe('PlayerEditService', () => {
  let service: PlayerEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
