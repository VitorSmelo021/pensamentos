const express = require("express")
const router = require("./routes")
const exphbs = require("express-handlebars");

require("./database/index");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// Importando engine handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(router);

// app.get('/home', (request,response) => {
//     return response.render('home')
// })

// app.get('/cadastro', (request,response) => {
//     return response.render('cadastro')
// })

app.listen(3333, console.log("Servidor ta pegando na porta 3333 moral😎👍"))