require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors({
  origin: '*'
}));

// middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// routes
const tarefasRoutes = require('./routes/tarefas')
app.use('/tarefas', tarefasRoutes)

// connectar ao MongoDB
mongoose
  .connect(process.env.BASE_URL)
  .then(() => {
    console.log('conectado ao bd')
    app.listen(3001)
  })
  .catch((e) => {
    console.log(e)
  })