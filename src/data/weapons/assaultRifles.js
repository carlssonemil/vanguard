import { defaultProgress } from '../defaults'

const weapons = ['STG44', 'Automaton', 'Itra Burst', 'Bar', 'AS44', 'NZ-41', 'Volkssturmgewehr', 'Cooper Carbine', 'KG M40', 'Nikita AVT', 'Vargo-S', 'EX1', 'BP50', 'Lienna 57']
const original = ['STG44', 'Automaton', 'Itra Burst', 'Bar', 'AS44', 'NZ-41', 'Volkssturmgewehr']

export default weapons.map(weapon => ({
  category: 'Assault Rifles',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...defaultProgress },
    atomic: { ...defaultProgress }
  }
}));
