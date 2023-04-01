const consign = require('consign')
const express = require('express')
const app = express()
const db = require('./config/db')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3001, () => {
    console.log('Backend executando');
})