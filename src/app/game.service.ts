import { Injectable } from '@angular/core';
import { RandomNumberService } from './random-number.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(
    public randomNumberService: RandomNumberService,
    public LogService: LogService
  ) { }

  playerMaxHealth: number = 100;
  monsterMaxHealth: number = 100;
  playerHealth: number = this.playerMaxHealth;
  monsterHealth: number = this.monsterMaxHealth;
  playerDamage: number = 0;
  monsterDamage: number = 0;
  healPoints: number = 0;

  playerAttack() {
    this.playerDamage = this.randomNumberService.generate(1, 10);
    this.monsterHealth -= this.playerDamage;
    this.LogService.addLog(`Player hits Monster for ${this.playerDamage} !`);
    this.monsterAttack();
    this.LogService.addLog(
      `Monster replied with ${this.monsterDamage} damage !`
    );
    this.checkGameOver();
  }

  monsterAttack() {
    this.monsterDamage = this.randomNumberService.generate(1, 10);
    this.playerHealth -= this.monsterDamage;
  }

  specialAttack() {
    this.playerDamage = this.randomNumberService.generate(15, 25);
    this.LogService.addLog(`Player hits Monster hard for ${this.playerDamage}`);
    this.monsterHealth -= this.playerDamage;
    this.LogService.addLog(`Monster replied with ${this.monsterDamage} damage`);
    this.monsterAttack(), this.checkGameOver();
  }

  heal() {
    this.healPoints = this.randomNumberService.generate(5, 15);
    this.LogService.addLog(`Player healed for ${this.healPoints}`);
    this.playerHealth += this.healPoints;
    this.monsterAttack();
    this.LogService.addLog(
      `Monster replied to this healing with ${this.monsterDamage} damage`
    );
    this.checkGameOver();
  }

  resign() {
    alert('You resigned !');
    this.playerHealth = 0;  
    this.monsterHealth = 0;

    setTimeout(() => {
      this.resetGame();
    }, 750);
  }

  resetGame() {
    this.LogService.clearLogs();
    this.playerHealth = this.playerMaxHealth;
    this.monsterHealth = this.monsterMaxHealth;
  }

  checkGameOver() {
    switch (true) {
      case this.playerHealth <= 0:
        alert('You lost !');
        this.resetGame();
        break;
      case this.monsterHealth <= 0:
        alert('You won !');
        this.resetGame();
        break;
    }

    if (this.playerHealth > this.playerMaxHealth) {
      this.playerHealth = this.playerMaxHealth;
      if (this.healPoints > 0) {
        alert('You already have full life !');
      }
    }
  }
}
