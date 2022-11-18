import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  
  receiveDamage(attackPoints: number): number {
    const score = this._lifePoints - attackPoints;
    if (score <= 0) {
      this._lifePoints = -1;
    }
    return score;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}
