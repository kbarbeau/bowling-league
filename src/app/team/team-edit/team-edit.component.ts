import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore';
import { EMPTY, from, Observable, Subject, takeUntil } from 'rxjs';
import { Player } from 'src/app/player/interfaces/player';
import { Team, TSport } from '../interfaces/team';
import { TeamEditService } from '../services/team-edit.service';
import { LABELS } from './team-edit.constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-team-edit',
  styleUrls: ['./team-edit.component.scss'],
  templateUrl: './team-edit.component.html',
})
export class TeamEditComponent implements OnDestroy, OnInit {
  public fg: FormGroup = this.TeamEditSvc.initForm();
  public id?: string = '';
  public isReady: boolean = false;
  public pageTitle: string = '';
  public players: Player[] = [];
  public players$: Observable<Player[]> = EMPTY;
  public sports: TSport[] = ['bowling'];

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private _snackBar: MatSnackBar,
    private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    private TeamEditSvc: TeamEditService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.setupObservers();
    this.setupPlayers();
  }

  addTeam(team: Team): void {
    const teamColRef: CollectionReference<Team> = collection(
      this.firestore,
      'teams'
    );

    from(addDoc(teamColRef, team))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.onSubmitSuccess());
  }

  setupPlayers(): void {
    const playersColRef = collection(this.firestore, 'players');
    this.players$ = collectionData(playersColRef, { idField: 'id' });
  }

  setupData(data: Data): void {
    const isEditing: boolean = !!data['resolverData'];

    if (isEditing) {
      const team: Team = data['resolverData'];

      this.fg = this.TeamEditSvc.initForm(team);
      this.id = team.id;
      this.pageTitle = LABELS.pageTitle.edit;
    } else {
      this.fg = this.TeamEditSvc.initForm();
      this.pageTitle = LABELS.pageTitle.create;
    }
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }

  onSubmit(): void {
    const teamForSave: Team = this.TeamEditSvc.formatForSave(this.fg?.value);

    this.id ? this.updateTeam(teamForSave) : this.addTeam(teamForSave);
  }

  onSubmitSuccess(): void {
    const message: string = this.id
      ? LABELS.submitSuccessfully.edit
      : LABELS.submitSuccessfully.create;

    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.router.navigate(['', { outlets: { side: null } }]);
  }

  updateTeam(team: Team): void {
    const teamDocRef: DocumentReference<Team> = doc(
      this.firestore,
      'teams',
      this.id
    );

    from(updateDoc(teamDocRef, team))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.onSubmitSuccess());
  }
}
