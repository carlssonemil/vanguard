import { defaultProgress } from '../defaults'

const weapons = ['Ratt', 'Top Break', '1911', 'Klauser', 'Machine Pistol', 'Valois Revolver']
const original = ['Ratt', 'Top Break', '1911', 'Klauser', 'Machine Pistol']

export default weapons.map(weapon => ({
  category: 'Handguns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...defaultProgress },
    atomic: { ...defaultProgress }
  }
}));