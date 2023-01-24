const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ResponseSchema = new Schema({
  form: { type: Schema.Types.ObjectId, required: true },
  response: { type: Object, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('Response', ResponseSchema, 'responses')
