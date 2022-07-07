const router = require('express').Router()
const Tables = require('../tables/db')

// create
router.post('/', async (req, res) => {
  const { text, status } = req.body
  console.log(req.body)

  if (!text) {
    res.status(422).json({req})
    return
  }

  let data = {
    text,
    status
  }

  try {

    await Tables.create(data)
    res.status(201).json({info: 'Tarefa criada com sucesso.'})
    
  } catch (error) {
    res.status(500).json({info: `Falha na criação da tarefa. (${error})`})
  }
})

// read
router.get('/', async (req, res) => {
  try {
    
    const search = await Tables.find()
    res.status(200).json(search)

  } catch (error) {
    res.status(500).json({info: `Falha ao buscar as tarefas. (${error})`})
  }
})

// read status
router.get('/:status', async (req, res) => {
  try {

    const status = req.params.status
    const search = await Tables.find({status: status})
    
    if (!search) {
      res.status(422).json({ info: 'Sem resultado para sua consulta.'})
      return
    }

    res.status(200).json(search)

  } catch (error) {
    res.status(500).json({info: `Falha ao buscar as tarefas. (${error})`})
  }
})

// update
router.patch('/:id', async (req, res) => {

  const id = req.params.id
  const { text, status } = req.body

  let data = {
    text,
    status
  }

  try {

    const update = await Tables.updateOne({_id: id}, data)

    if (update.matchedCount === 0) {
      res.status(422).json({ info: 'Falha ao atualizar a tarefa.'})
      return
    }

    res.status(200).json({info: 'Tarefa atualizada com sucesso.'})
    
  } catch (error) {
    res.status(500).json({info: `Falha ao atualizar a tarefa. (${error})`})
  }

})

// delete
router.delete('/:id', async (req, res) => {

  const id = req.params.id
  const search = await Tables.find({_id: id})
    
  if (!search) {
    res.status(422).json({ info: 'A tarefa não foi encontrada.'})
    return
  }

  try {

    await Tables.deleteOne({_id: id})
    res.status(200).json({info: 'Tarefa removida com sucesso.'})

  } catch (error) {
    res.status(500).json({info: `Falha ao excluir a tarefa. (${error})`})
  }

})

// export
module.exports = router