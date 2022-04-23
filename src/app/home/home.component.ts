import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fileControl: FormControl = new FormControl();
  selectedFile;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((res) => console.log(res));
  }

  onFileChosen(event): void {
    console.log(event);
    console.log(this.storage);
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile.name);
    const ref = this.storage.ref(this.selectedFile.name);
    const task = ref.put(this.selectedFile);
    console.log(ref, task);
  }
}
