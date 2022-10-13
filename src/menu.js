import { home, universe, explorer } from './elements.js'

export default function Menu() {
  function selectHome() {
    home.classList.add('active')
    universe.classList.remove('active')
    explorer.classList.remove('active')
  }

  function selectUniverse() {
    universe.classList.add('active')
    home.classList.remove('active')
    explorer.classList.remove('active')
  }

  function selectExplorer() {
    explorer.classList.add('active')
    universe.classList.remove('active')
    home.classList.remove('active')
  }

  return {
    selectHome,
    selectUniverse,
    selectExplorer
  }
}
