import Dexie, { Table } from 'dexie';
import { NPC, Player } from '../Interfaces/character';
import { Enemy } from '../Interfaces/enemies';
import { Items } from '../Interfaces/items';
import itemsDB from './itemsDB';

export class AppDB extends Dexie {
  locations!: Table<Location, number>;
  items!: Table<Items, number>;
  enemies!: Table<Enemy, number>;
  NPCs!: Table<NPC, number>;
  players!: Table<Player, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      locations: '++id',
      items: '++id',
      enemies: '++id, itemId, locationId',
      NPCs: '++id, itemId, locationId',
      players: '++id, itemId,locationId',
    });
    this.on('populate', () => this.populate());

  }

    async populate() {
      await db.items.bulkAdd(itemsDB());
    }
}

export const db = new AppDB();
