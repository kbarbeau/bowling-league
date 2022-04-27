import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  @Input() showColumns: string[] = ['name', 'actions']; // Used to show or hide columns

  public players: Player[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setupObservers();
  }

  setupData(data: Data): void {
    this.players = data['resolverData'] as Player[];
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }
}
