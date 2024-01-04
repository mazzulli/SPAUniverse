export class Router {

    routes = {}

    // adiciona as rotas
    add(routName, page){
        this.routes[routName] = page
    }

    // registra as rotas
    route(event){
        event = event || window.event;
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }
    
    // executando as rotas
    handle() {
        // usando desestruturação
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        // retorna de forma assincrona a pagina selecionada
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

}

