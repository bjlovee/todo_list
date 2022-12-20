const mongoose = require('mongoose')
const {Schema, model} =mongoose



//Make A Schema
const todoSchema = new Schema({
    title: {type: String, required: true, unique: true },
    Completed: {type: String, required: true}
})

const Todo = model('Todo', todoSchema)

module.export = Todo