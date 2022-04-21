import { defaultProgress } from '../defaults'

const weapons = ['M1 Garand', 'SVT-40', 'G-43', 'M1916']
const original = ['M1 Garand', 'SVT-40', 'G-43']

export default weapons.map(weapon => ({
  category: 'Marksman Rifles',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...defaultProgress },
    atomic: { ...defaultProgress }
  }
}));