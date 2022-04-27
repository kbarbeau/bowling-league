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
    this.player = data['resolverData'] as Player;
  }

  setupObservers(): void {
    this.route.data.subscribe((data: Data) => this.setupData(data));
  }
}
