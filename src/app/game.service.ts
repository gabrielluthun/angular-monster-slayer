import { Injectable } from '@angular/core';
import { RandomNumberService } from './random-number.service';
import { LogService } from './log.service';


@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    private randomNumberService: RandomNumberService,
    private logService: LogService
  ) { }

  playerMaxHealth: number = 100;
  monsterMaxHealth: number = 100;
  playerHealth: number = 100;
  monsterHealth: number = this.monsterMaxHealth;
  playerDamage = this.randomNumberService.generate(1, 5);
  monsterDamage = this.randomNumberService.generate(1, 10);
  playerDamageMultiplier = this.playerDamage;
  monsterDamageMultiplier = this.monsterDamage;
  victoryStreak: number = 0;

  playerAttack() {

    this.monsterHealth -= this.playerDamage;
    this.logService.addLog(`Player inflicts ${this.playerDamage} damage to the monster!`);
    this.monsterAttack();
    this.checkGameOver();
  }

  monsterAttack() {
    const monsterDamage = this.randomNumberService.generate(10, 15);
    this.playerHealth -= monsterDamage;
    this.logService.addLog(`Monster retaliates with ${monsterDamage} damage!`);
  }

  specialAttack() {
    const playerDamage = this.randomNumberService.generate(15, 25);
    this.monsterHealth -= playerDamage;
    this.logService.addLog(`Player delivers a powerful blow of ${playerDamage} damage to the monster!`);
    this.monsterAttack();
    this.checkGameOver();
  }

  heal() {
    const healPoints = this.randomNumberService.generate(15, 30);
    this.playerHealth = Math.min(this.playerHealth + healPoints, this.playerMaxHealth);
    this.logService.addLog(`Player heals for ${healPoints} health points.`);
    this.monsterAttack();
    this.checkGameOver();
  }

  resign() {
    this.logService.addLog('Player resigns the game!');
    this.victoryStreak = 0;
    setTimeout(() => {
      this.resetGame();
    }, 750);
  }

  resetGame() {
    setTimeout(() => {
      this.playerHealth = this.playerMaxHealth = 100;
      this.monsterHealth = this.monsterMaxHealth = 100;
      this.logService.clearLogs();
    }, 750);
  }

  checkGameOver() {
    if (this.playerHealth <= 0) {
      alert('You lost!');
      this.resetGame();
      this.victoryStreak = 0;
    } else if (this.monsterHealth <= 0) {
      alert('You won!');
      this.victoryStreak++;
      this.increasePowerBasedOnStreak();
      this.monsterHealth = this.monsterMaxHealth;
    }
  }

  increasePowerBasedOnStreak() {
    if (this.victoryStreak > 0) {
      this.playerMaxHealth += this.randomNumberService.generate(5, 10);
      this.monsterMaxHealth += this.randomNumberService.generate(25, 50);

      const playerDamageIncrease = Math.round(this.playerDamage * 0.15);
      const monsterDamageIncrease = Math.round(this.monsterDamage * 2);
      this.playerDamage += playerDamageIncrease;  
      this.monsterDamage += monsterDamageIncrease;
      this.playerHealth = this.playerMaxHealth; //Reset player health


    }
  }
}
