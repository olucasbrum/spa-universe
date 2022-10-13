import { home, universe, explorer } from './elements.js'

export default function ({ change }) {
  home.addEventListener('click', () => {
    change.selectHome()
  })

  universe.addEventListener('click', () => {
    change.selectUniverse()
  })

  explorer.addEventListener('click', () => {
    change.selectExplorer()
  })
}
