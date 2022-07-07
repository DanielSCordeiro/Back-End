const mongoose = require('mongoose')

const Tables = mongoose.model('tarefas', {
  text: String,
  status: String
})

module.exports = Tables