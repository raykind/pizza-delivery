const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  address: {type: String, required: true, default: ''},
  total: {type: Number, required: true, default: 0},
  order: [{type: Types.ObjectId, ref: 'Pizza'}],
  userId: {type: Types.ObjectId, ref: 'User'},
})

module.exports = model('Order', schema)
