const express = require("express")

require("./database/index");

const app = express();
app.use(express.json());

app.listen(3333, console.log("Servidor ta pegando na porta 3333 moral😎👍"))