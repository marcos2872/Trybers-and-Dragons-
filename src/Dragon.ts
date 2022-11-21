import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePointsD: number;

  constructor() {
    super();
    this._lifePointsD = 999;
  }
}