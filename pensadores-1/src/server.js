const express = require("express")
const router = require("./routes")
const exphbs = require("express-handlebars");
const { response } = require("express");

require("./database/index");

const app = express();
app.use(express.json());

// Importando engine handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(router);

app.get('/main', (response,request) => {
    return response.prependListener('main')
})

app.listen(3333, console.log("Servidor ta pegando na porta 3333 moral😎👍"))