import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

interface ChipAvatarItem {
  id: string;
  image: string;
  name: string;
}

@Component({
  selector: 'app-chip-avatar-group',
  templateUrl: './chip-avatar-group.component.html',
  styleUrls: ['./chip-avatar-group.component.scss'],
})
export class ChipAvatarGroupComponent implements OnInit {
  @Input() arrayGroup: any[] = [];

  elements: any[] = [];

  constructor(private cdr: ChangeDetectorRef, private firestore: Firestore) {}

  ngOnInit(): void {
    this.arrayGroup.forEach((element) => {
      // ! WIP :: User query instead of getDoc
      const docRef = doc(this.firestore, 'players', element.id);
      getDoc(docRef).then((doc) => {
        this.elements = this.elements.concat(doc.data());
        this.cdr.detectChanges();
      });
    });
  }
}
