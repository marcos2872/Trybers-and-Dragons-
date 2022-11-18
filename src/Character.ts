// import Archetype from './Archetypes';
// import Energy from './Energy';
// import Fighter from './Fighter';
// import Race from './Races';
// import getRandomInt from './utils';

// export default class Character extends Race implements Fighter {
//   private _race: Race;
//   private _archetype: Archetype;
//   private _maxLifePoints: number;
//   private _lifePoints: number;
//   private _strength: number;
//   private _defense: number;
//   private _dexterity: number;
//   private _energy: Energy;
//   private _name: string;

//   constructor(name: string) {
//     const number = getRandomInt(1, 10);
//     super(name, number);
//     this._dexterity = number;
//     this._name = name;
//     this._race = ;
//     this._archetype = new Character(name);
//     this._strength = getRandomInt(1, 10);
//     this._defense = getRandomInt(1, 10);
//     this._energy = {
//       type_: new Character(name).energyType,
//       amount: getRandomInt(1, 10),
//     };
//     const maxPoint = new Character(name).maxLifePoints;
//     this._maxLifePoints = maxPoint / 2;
//     this._lifePoints = maxPoint / 2;
//   }
// }