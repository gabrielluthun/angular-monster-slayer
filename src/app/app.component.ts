import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { MonsterComponent } from './monster/monster.component';
import { LogComponent } from './log/log.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, PlayerComponent, MonsterComponent, LogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() { }
  title = 'monster-slayer';
}
