import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energy: 'mana';
  private static _instance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
    Mage._instance += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}