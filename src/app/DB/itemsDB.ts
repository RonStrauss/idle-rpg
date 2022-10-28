import { Equippable, Item, Potion } from '../Interfaces/items';

export default () => [...equippables(), ...potions(), ...trash()];

function equippables(): Item<Equippable>[] {
  return [
    {
      equippable: true,
      name: 'Iron Sword',
      value: 20,
      percentageDrop: 3,
      type: {
        category: 'Weapon',
        dualHanded: false,
        positions: [5, 6],
        stats: {},
        attack: 5,
      },
    },
    {
      equippable: true,
      name: 'Wooden Shield',
      value: 40,
      percentageDrop: 5,
      type: {
        category: 'Shield',
        positions: [5, 6],
        dualHanded: false,
        stats: {},
        defense: 3,
      },
    },
    {
      equippable: true,
      name: 'Iron Helmet',
      value: 30,
      percentageDrop: 3,
      type: {
        defense: 2,
        category: 'Armor',
        positions: [1],
        stats: {},
      },
    },
  ];
}

function potions(): Item<Potion>[] {
  return [
    {
      equippable: false,
      name: 'Minor Health Potion',
      value: 5,
      percentageDrop: 35,
      type: {
        restorative: true,
        amountRestores: 10,
        restores: 'HP',
      },
    },
    {
      equippable: false,
      name: 'Minor Mana Potion',
      value: 5,
      percentageDrop: 35,
      type: {
        restorative: true,
        amountRestores: 10,
        restores: 'MP',
      },
    },
    {
      equippable: false,
      name: 'Strength +3',
      value: 300,
      percentageDrop: 0.1,
      type: {
        restorative: false,
        stats: { strength: 3 },
      },
    },
  ];
}

function trash(): Item<'Trash'>[] {
  return [
    {
      equippable: false,
      name: 'Bone',
      value: 1,
      percentageDrop: 40,
      type: 'Trash',
    },
    {
      equippable: false,
      name: 'Tuft of Fur',
      value: 1,
      percentageDrop: 25,
      type: 'Trash',
    },
    {
      equippable: false,
      name: 'Golden Chalice',
      value: 20,
      percentageDrop: 4,
      type: 'Trash',
    },
  ];
}
