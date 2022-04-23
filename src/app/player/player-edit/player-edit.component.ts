import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PlayerEditService } from '../services/player-edit.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss'],
})
export class PlayerEditComponent implements OnInit {
  fg: FormGroup;
  id?: string = '';
  imageFile: File;
  pageTitle: string = '';
  playerDocument: DocumentReference<DocumentData>;
  playersCollection: CollectionReference<DocumentData>;

  constructor(
    private cdr: ChangeDetectorRef,
    private firestore: Firestore,
    private PlayerEditSvc: PlayerEditService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.playersCollection = collection(this.firestore, 'players');
  }

  ngOnInit(): void {
    this.setupObservers();
  }

  imageHasChanged(event: any): void {
    const imageControl: FormControl = this.fg.controls['image'] as FormControl;

    this.imageFile = event.target.files?.[0];
    imageControl.setValue(this.imageFile?.name);
    imageControl.markAsDirty();
  }

  setupData(params: Params): void {
    console.log(params);
    if (params['id']) {
      this.setupDocument(params['id']);
    } else {
      this.fg = this.PlayerEditSvc.initForm();
      this.pageTitle = 'Create a Team';
    }
  }

  setupDocument(id: string): void {
    this.id = id;
    this.pageTitle = 'Edit Team';
    this.playerDocument = doc(this.firestore, `players/${this.id}`);

    onSnapshot(this.playerDocument, (docSnap) => {
      this.fg = this.PlayerEditSvc.initForm(docSnap.data());
      this.cdr.markForCheck();
    });
  }

  setupObservers(): void {
    this.route.params.subscribe((params) => this.setupData(params));
  }

  storePlayerImage(imagePath: File): void {
    const ref = this.storage.ref(imagePath.name);
    ref.put(this.imageFile);
  }

  onSubmit(): void {
    console.log(this.imageFile);
    if (this.imageFile) this.storePlayerImage(this.imageFile);

    this.id
      ? updateDoc(this.playerDocument, this.fg?.value)
      : addDoc(this.playersCollection, this.fg?.value);

    this.router.navigate(['/player']);
  }
}
