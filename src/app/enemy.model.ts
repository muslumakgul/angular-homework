import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Enemy {
  renderEnemy(enemyType: string, enemyHealth: number, enemyAttackDamage: number, enemyLocation: number) {
    return [enemyType, enemyHealth, enemyAttackDamage, enemyLocation];
  }
}
