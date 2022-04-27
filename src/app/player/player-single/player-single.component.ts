import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Player } from '../interfaces/player';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-player-single',
  styleUrls: ['./player-single.component.scss'],
  templateUrl: './player-single.component.html',
})
export class PlayerSingleComponent implements OnInit {
  public player: Player;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.setupObservers();
  }

  setupData(data: Data): void {
    this.setupPlayer(data['resolverData']);
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }

  setupPlayer(player: Player): void {
    this.player = player;
    console.log('player', player);
  }
}
