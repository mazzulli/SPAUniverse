import { Router } from './router.js'

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

// /*para permitir usar as setas de navegação    
// usar a propriedade onpopstate do window     
// para chamar a função handle */
window.onpopstate = () => router.handle()
window.route = (event) => router.route()