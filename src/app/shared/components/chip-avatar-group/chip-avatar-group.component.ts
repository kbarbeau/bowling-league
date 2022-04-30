import { Component, Input, OnInit } from '@angular/core';
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
  @Input() elementsId: string[] = [];
  @Input() type: 'players' | 'teams';

  elements: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.elementsId.forEach((id) => {
      const docRef = doc(this.firestore, this.type, id);
      getDoc(docRef).then((doc) => {
        this.elements = this.elements.concat(doc.data());
      });
    });
  }
}
