const { Router } = require('express')
const Pokemon = require('../models/Pokemon')
const router = Router()


router.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.find()
    res.json(pokemons)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/pokemons/count', async (req, res) => {
  try {
    const count = await Pokemon.countDocuments()
    res.json(count)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ pokeId: req.params.id })
    res.json(pokemon)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
