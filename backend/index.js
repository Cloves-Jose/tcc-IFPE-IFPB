const consign = require('consign')
const express = require('express')
const app = express()
const db = require('./config/db')

consign()
    .then('./config/middlewares')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('Backend executando');
})