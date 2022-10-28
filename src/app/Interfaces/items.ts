import { Stats } from './character';

export type Equippable =
  | AccessoryEquippable
  | ArmorEquippable
  | HandedEquippable;

interface HandedEquippable extends WithPartialStats {
  dualHanded: boolean;
  attack?: number;
  defense?: number;
  positions: (5 | 6)[];
  category: 'Weapon' | 'Shield';
}

interface ArmorEquippable extends WithPartialStats {
  defense: number;
  positions: (1 | 2 | 3 | 4 | 7 | 8)[];
  category: 'Armor';
}

interface AccessoryEquippable extends WithPartialStats {
  positions: (9 | 10 | 11 | 12)[];
  attack?: number;
  defense?: number;
  stats: Partial<Stats>;
  category: 'Accessory';
}

export interface Item<T> {
  equippable: boolean;
  type: T;
  name: string;
  value: number;
  percentageDrop: number;
}

export type Potion = Restorative | StatBooster;

type StatBooster = {
  restorative: false;
  stats: Partial<Stats>;
};

type Restorative = {
  restorative: true;
  restores: 'HP' | 'MP' | 'Both';
  amountRestores: number;
};

export interface WithPartialStats {
  stats: Partial<Stats>;
}

export type EquippableTypes = 'Accessory' | 'Armor' | 'Weapon' | 'Shield';

export type Items = Item<Equippable | Potion | 'Trash'>;
