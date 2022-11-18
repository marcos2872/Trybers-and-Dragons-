import Archetype from '../Archetypes';

export default abstract class Race extends Archetype {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    super(name);
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}