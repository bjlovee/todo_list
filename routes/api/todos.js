const express = require('express')
const router = express.Router()
// const dataController = require('./controllers/api/datacontrollers')
// const apiController = require('./routes/api/apiController')


const { dataController, apiController } = require('../../controllers/api/todos')

// add routes
// Index /api/todos
router.get('/api/todos/', dataController.index, apiController.index)
// Destory /api/todos/:id
router.delete('/api/todos/:id', dataController.destroy, apiController.show)
// Update /api/todos/:id
router.put('/api/todos/:id', dataController.update, apiController.show)
// Create /api/todos
router.post('/api/todos/', dataController.create, apiController.show)
// Show /api/todos/:id
router.get('/api/todos/:id', dataController.show, apiController.show)


module.exports = router