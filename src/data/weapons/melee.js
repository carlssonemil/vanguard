import { atomicProgress, aetherProgress } from '../defaults'

const weapons = ['Combat Shield', 'FS Fighting Knife']
const original = ['Combat Shield', 'FS Fighting Knife']

export default weapons.map(weapon => ({
  category: 'Melee',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...atomicProgress }
  }
}));