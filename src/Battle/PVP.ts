import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighter1: Fighter;
  private _fighter2: Fighter;
  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;

    this._fighter2 = fighter2;
  }

  fight(): number {
    let fighter = 0;

    while (
      this._fighter1.lifePoints !== -1
      && this._fighter2.lifePoints !== -1
    ) {
      this._fighter2.attack(this._fighter1);
      this._fighter1.attack(this._fighter2);

      if (this._fighter1.lifePoints === -1) {
        fighter = -1;
      } else {
        fighter = 1;
      }
    }
    return fighter;
  }
}