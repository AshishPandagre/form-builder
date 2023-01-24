const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  questions: { type: Object, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Form', FormSchema, 'forms')
