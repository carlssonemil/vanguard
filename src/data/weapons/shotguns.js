import { atomicProgress, aetherProgress } from '../defaults'

const weapons = ['Einhorn Revolving', 'Combat Shotgun', 'Gracey Auto', 'Double Barrel']
const original = ['Einhorn Revolving', 'Combat Shotgun', 'Gracey Auto', 'Double Barrel']

export default weapons.map(weapon => ({
  category: 'Shotguns',
  name: weapon,
  dlc: !original.includes(weapon),
  progress: {
    aether: { ...aetherProgress },
    atomic: { ...atomicProgress }
  }
}));