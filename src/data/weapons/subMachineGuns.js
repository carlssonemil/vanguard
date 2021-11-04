import { atomicProgress, aetherProgress } from '../defaults'

const weapons = ['MP40', 'Sten', 'M1928', 'Owen Gun', 'Type 100', 'PPSh-41']
const original = ['MP40', 'Sten', 'M1928', 'Owen Gun', 'Type 100', 'PPSh-41']

export default weapons.map(weapon => ({
  category: 'Submachine Guns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    atomic: { ...atomicProgress }
  }
}));
