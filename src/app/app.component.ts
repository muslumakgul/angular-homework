import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Enemy } from './enemy.model';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public enemy = inject(Enemy);
  enemies = [
    this.enemy.renderEnemy('Zombie', 300, 10, 3232),
    this.enemy.renderEnemy('Lion', 100, 15, 1681),
    this.enemy.renderEnemy('Bug', 50, 2, 1681),
    this.enemy.renderEnemy('Zombie', 300, 10, 1681),
    this.enemy.renderEnemy('Bug', 50, 2, 1681),
  ];

  public hero = inject(Hero);
  heroStats = this.hero.renderHero(1000, 10, 1469);

  //private enemy1 = inject(Enemy);
  //enemyStats = this.enemy1.renderEnemy('Zombie', 300, 10, 1681);

  //private enemy2 = inject(Enemy);
  //enemyStats2 = this.enemy2.renderEnemy('Lion', 100, 15, 1891);

  //private enemy3 = inject(Enemy);
  //enemyStats3 = this.enemy3.renderEnemy('Bug', 50, 2, 1901);

  isButtonHidden: boolean = false;
  startMessage: any;
  
  journeyBegin() {
    this.startMessage = `Hero started journey with ${this.heroStats[0]} HP. Resources are ${this.heroStats[2]} meters away.`;
    this.isButtonHidden = true;
  }

  firstEnemyOpponent: any = this.enemies[0];

  fightFunction() { 
    this.heroStats[0] = this.heroStats[0] - this.firstEnemyOpponent[0];
    return `Hero defeated ${this.firstEnemyOpponent[0]} with ${this.heroStats[0]} HP remaining.`
  }

}


