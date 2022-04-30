import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  collectionData,
  Firestore,
  getFirestore,
} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  updateDoc,
} from 'firebase/firestore';
import { EMPTY, Observable } from 'rxjs';
import { Player } from 'src/app/player/interfaces/player';
import { Team, TSport } from '../interfaces/team';
import { TeamEditService } from '../services/team-edit.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-team-edit',
  styleUrls: ['./team-edit.component.scss'],
  templateUrl: './team-edit.component.html',
})
export class TeamEditComponent implements OnInit {
  public fg: FormGroup = this.TeamEditSvc.initForm();
  public id?: string = '';
  public isReady: boolean = false;
  public pageTitle: string = '';
  public players: Player[] = [];
  public players$: Observable<Player[]> = EMPTY;
  public sports: TSport[] = ['bowling'];

  private db: Firestore;
  private teamDocument: DocumentReference<DocumentData>;
  private teamsCollection: CollectionReference<DocumentData>;

  constructor(
    private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    private TeamEditSvc: TeamEditService
  ) {
    this.teamsCollection = collection(this.firestore, 'teams');
  }

  ngOnInit(): void {
    this.db = getFirestore();

    this.setupObservers();
    this.setupPlayers();

    console.log(this.fg.value);
  }

  setupPlayers(): void {
    const playersColRef = collection(this.db, 'players');
    this.players$ = collectionData(playersColRef, { idField: 'id' });

    console.log(this.players$);
  }

  setupData(data: Data): void {
    const isEditing: boolean = !!data['resolverData'];

    if (isEditing) {
      const team: Team = data['resolverData'];

      this.fg = this.TeamEditSvc.initForm(team);
      this.id = team.id;
      this.pageTitle = 'Edit Team';
    } else {
      this.fg = this.TeamEditSvc.initForm();
      this.pageTitle = 'Create a Team';
    }
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }

  onSubmit(): void {
    const teamForSave: Team = this.TeamEditSvc.formatForSave(this.fg?.value);

    this.id
      ? updateDoc(this.teamDocument, teamForSave as any)
      : addDoc(this.teamsCollection, teamForSave);

    this.router.navigate(['', { outlets: { side: null } }]);
  }
}
