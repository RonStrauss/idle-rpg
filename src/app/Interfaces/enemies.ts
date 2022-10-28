import { Stats } from './character';
import { Items } from './items';

export interface Enemy {
  name: string;
  level: number;
  stats: Stats;
  drops: Items[];
}
