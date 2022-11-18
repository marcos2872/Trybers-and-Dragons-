import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: 'stamina';
  private static _instance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Warrior._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}