const { Schema, model } = require('mongoose')

const schema = new Schema({
  pokeId: { type: Number, required: true, unique: true },
  stats: { type: Array },
  spritesFront: { type: String },
  spritesBack: { type: String },
  abilities: { type: Array },
  types: { type: Array },
  name: { type: String },
  height: { type: Number },
  weight: { type: Number },
  baseExperience: { type: Number }
})

module.exports = model('Pokemon', schema)
