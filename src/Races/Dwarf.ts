import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instance = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instance += 1;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}