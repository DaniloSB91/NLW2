//Servidor 
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}  = require('./pages')


const nunjucks = require('nunjucks')
//Confirguação do Nunjucks (Template, engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})


server // Inicio e configuação do servidor
    .use(express.urlencoded({extended: true})) //receber os dados do body
    .use(express.static("public"))// Configurar arquivos estaticos (Css, Script, Imagens)
    //Rotas de aplicação
    .get("/", pageLanding )
    .get("/study", pageStudy )
    .get("/give-classes", pageGiveClasses )
    .post('/save-classes', saveClasses)
    .listen(5500)//Start do servidor

/*nodemon é o plugin que monitora as conexões do servidor,
em vez de ficar ligando e desligando manualmente com CTRL + C
no terminal*/

/*OBS: é recomendado utilizar nodemon em ambiente de desenvolvimento.
Em ambiente de produção não será mais necessária a sua utilização*/

// Para inicar o servido executar o comando npm run dev no terminal Ctrl + Shift + '