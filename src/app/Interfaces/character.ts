import { Equippable, Item, Items } from './items';

export interface Player extends Character {
  class: CharacterClass;
  stats: Stats;
  equipped: Item<Equippable>[];
  bagSize: number;
  level: number;
  experience: number | bigint;
  location: number;
  gold: number;
  currentHP: number;
  currentMP: number;
}

export interface NPC extends Character {
  vendor: boolean;
}


type CharacterClass = 'Warrior' | 'Wizard' | 'Ranger';

export interface Stats {
  strength: number;
  intelligence: number;
  agility: number;
  wisdom: number;
  endurance: number;
  luck: number;
}

interface Character {
  name: string;
  inventory: Items[];
}
