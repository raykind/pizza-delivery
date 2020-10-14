const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  weight: {type: Number, required: true},
  description: {type: String},
  photoUrl: {type: String}
})

module.exports = model('Pizza', schema)
