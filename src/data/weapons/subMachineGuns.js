import { defaultProgress } from '../defaults'

const weapons = ['MP-40', 'Sten', 'M1928', 'Owen Gun', 'Type 100', 'PPSh-41', 'Welgun']
const original = ['MP-40', 'Sten', 'M1928', 'Owen Gun', 'Type 100', 'PPSh-41']

export default weapons.map(weapon => ({
  category: 'Submachine Guns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...defaultProgress },
    atomic: { ...defaultProgress }
  }
}));
