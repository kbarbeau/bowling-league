import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { from, Subject, takeUntil } from 'rxjs';
import { Player } from '../interfaces/player';
import { PlayerEditService } from '../services/player-edit.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-player-edit',
  styleUrls: ['./player-edit.component.scss'],
  templateUrl: './player-edit.component.html',
})
export class PlayerEditComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject();
  fg: FormGroup;
  id?: string;
  imageFile: File;
  pageTitle: string = '';

  constructor(
    private firestore: Firestore,
    private PlayerEditSvc: PlayerEditService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.setupObservers();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  addPlayer(): void {
    const playerColRef: CollectionReference<Player> = collection(
      this.firestore,
      'players'
    );

    from(addDoc(playerColRef, this.fg?.value))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.onSubmitSuccess());
  }

  imageHasChanged(event: any): void {
    const imageControl: FormControl = this.fg.controls['image'] as FormControl;

    this.imageFile = event.target.files?.[0];
    imageControl.setValue(this.imageFile?.name);
    imageControl.markAsDirty();
  }

  setupData(data: Data): void {
    const isEditing: boolean = !!data['resolverData'];

    if (isEditing) {
      const player: Player = data['resolverData'];

      this.fg = this.PlayerEditSvc.initForm(player);
      this.id = player.id;
      this.pageTitle = 'Edit Player';
    } else {
      this.fg = this.PlayerEditSvc.initForm();
      this.pageTitle = 'Create a Player';
    }
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }

  storePlayerImage(imagePath: File): void {
    const ref = this.storage.ref(imagePath.name);
    ref.put(this.imageFile);
  }

  onSubmit(): void {
    if (this.imageFile) this.storePlayerImage(this.imageFile);
    this.id ? this.updatePlayer() : this.addPlayer();
  }

  onSubmitSuccess(): void {
    this.router.navigate(['', { outlets: { side: null } }]);
  }

  updatePlayer(): void {
    const playerDocRef: DocumentReference<Player> = doc(
      this.firestore,
      'players',
      this.id
    );

    from(updateDoc(playerDocRef, this.fg?.value))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.onSubmitSuccess());
  }
}
