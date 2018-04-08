'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: true})
const app = express()
const port = process.env.PORT || 3500

app.set('trust proxy', 1) // trust first proxy
app.set('port', port)

app.use(urlencodedParser)
app.use(bodyParser.json())

const indexFilePath = path.join(__dirname, '..', '..', 'client', 'dist', 'index.html')
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')))

/*
* Default path, always in the end
*/
app.get('*', async (req, res) => {
  res.sendFile(indexFilePath)
})

module.exports = app
