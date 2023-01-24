require('dotenv').config()
const express = require('express')
const app = express()
const dbConnect = require('./connectDB')
const cors = require("cors");
const routes = require('./routes');

app.use(cors())
dbConnect()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})
