import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  constructor(public gameService: GameService) { } 

  getLimitedPlayerHealthBarWidth() {
    const healthPercentage = (this.gameService.playerHealth / this.gameService.playerMaxHealth) * 100;
  return Math.min(healthPercentage, 100);
  }
}
