import { meleeProgress } from '../defaults'

const weapons = ['Combat Shield', 'FS Fighting Knife', 'Sawtooth', 'Katana', 'Ice Axe', 'Sledgehammer', 'Push Dagger', 'Skål Crusher']
const original = ['Combat Shield', 'FS Fighting Knife']

export default weapons.map(weapon => ({
  category: 'Melee',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...meleeProgress },
    atomic: { ...meleeProgress }
  }
}));
