import { Component } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent {
  constructor(public gameService: GameService) { } 

}
