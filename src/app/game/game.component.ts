import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  constructor(public gameService: GameService) { } 

  playerAttack() {
    this.gameService.playerAttack();
  }

  monsterAttack() {
    this.gameService.monsterAttack();
  }

  specialAttack() {
    this.gameService.specialAttack();
  }

  heal() {
    this.gameService.heal();
  }

  resign() {
    this.gameService.resign();
  }

  checkGameOver() {
    this.gameService.checkGameOver();
  }
}