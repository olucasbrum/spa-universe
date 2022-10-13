import Events from './events.js'
import Menu from './menu.js'
import Router from './router.js'

const change = Menu()
const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explorer', '/pages/explorer.html')
router.add(404, '/pages/404.html')

router.handle()
Events({ change })

window.onpopstate = () => router.handle()
window.route = () => router.route()
