const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favPokes: [{ type: Types.ObjectId, ref: 'Pokemon' }]
})

module.exports = model('User', schema)
