import { NPC } from './character';
import { Enemy } from './enemies';

export type Location = SafeLocation | UnsafeLocation

interface UnsafeLocation extends LocationTemplate{
  safe:false
  enemies:Enemy[]
}

interface SafeLocation extends LocationTemplate{
  safe:true
  NPCs:NPC[]
}

interface LocationTemplate {
  name: string;
  level: number;
}

