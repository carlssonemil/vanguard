import { atomicProgress, aetherProgress } from '../defaults'

const weapons = ['MG42', 'DP27', 'Type 11', 'Bren']
const original = ['MG42', 'DP27', 'Type 11', 'Bren']

export default weapons.map(weapon => ({
  category: 'Light Machine Guns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    ultra: { ...atomicProgress }
  }
}));