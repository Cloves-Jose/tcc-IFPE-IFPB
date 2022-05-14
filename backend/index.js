const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const PORT = 3000


app.db = db

consign()
    .include('./config/middlewares.js')
    .then('./api/helpers/validacoes.js')
    .then('./api/controllers/ameacaController.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})