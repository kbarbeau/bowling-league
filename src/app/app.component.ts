import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Game manager';
  items: any;

  constructor() {
    // this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {}
}
