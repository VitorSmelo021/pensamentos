const express = require("express")
const router = require("./routes")

require("./database/index");

const app = express();
app.use(express.json());
app.use(router);


app.listen(3333, console.log("Servidor ta pegando na porta 3333 moral😎👍"))