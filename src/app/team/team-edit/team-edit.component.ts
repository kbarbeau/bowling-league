import { Component, OnInit } from '@angular/core';
import {
  collectionData,
  doc,
  Firestore,
  getFirestore,
  onSnapshot,
} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
import { TSport } from '../interfaces/team';
import { TeamEditService } from '../services/team-edit.service';

@Component({
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

    // onSnapshot(playersColRef, (snapshot) => {
    //   snapshot.docs.forEach(
    //     (doc: QueryDocumentSnapshot<DocumentData>) =>
    //       (this.players = this.players.concat([doc.data()]))
    //   );
    // });
  }

  setupData(params: Params): void {
    if (params['id']) {
      this.setupDocument(params['id']);
    } else {
      this.pageTitle = 'Create a Team';
      this.isReady = true;
    }
  }

  setupDocument(id: string): void {
    this.id = id;
    this.pageTitle = 'Edit Team';
    this.teamDocument = doc(this.firestore, `teams/${this.id}`);

    onSnapshot(this.teamDocument, (docSnap) => {
      this.fg.patchValue(this.TeamEditSvc.initForm(docSnap.data()).value);
    });
  }

  setupObservers(): void {
    this.route.params.subscribe((params) => this.setupData(params));

    this.fg.valueChanges.subscribe((res) => console.log(res));
  }

  onSubmit(): void {
    this.id
      ? updateDoc(this.teamDocument, this.fg?.value)
      : addDoc(this.teamsCollection, this.fg?.value);

    this.router.navigate(['/team']);
  }
}
