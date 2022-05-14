const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const PORT = 3000


app.db = db

consign()
    .into(app)

app.listen(PORT, () => {
    console.log(`Servidor na porta ${PORT}`)
})