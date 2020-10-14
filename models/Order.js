const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  cost: {type: Number, required: true},
  date: {type: Date, default: Date.now},
  customer: {type: Types.ObjectId, ref: 'User'},
  pizza: [{type: Types.ObjectId, ref: 'Pizza'}]
})

module.exports = model('Order', schema)
