import { Component, Input, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

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

  constructor(firestore: Firestore) {}

  ngOnInit(): void {
    const db = getFirestore();

    this.arrayGroup.forEach((element) => {
      console.log(element.path, element.id);
      const docRef = doc(db, 'players', element.id);
      getDoc(docRef).then((doc) => {
        this.elements = this.elements.concat(doc.data());
      });
    });
  }
}
