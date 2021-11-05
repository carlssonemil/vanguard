import { defaultProgress } from '../defaults'

const weapons = ['Type 99', '3-Line Rifle', 'Kar98k']
const original = ['Type 99', '3-Line Rifle', 'Kar98k']

export default weapons.map(weapon => ({
  category: 'Sniper Rifles',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...defaultProgress },
    atomic: { ...defaultProgress }
  }
}));