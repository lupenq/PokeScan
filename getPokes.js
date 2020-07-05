const axios = require('axios')
const Pokemon = require('./models/Pokemon')
const User = require('./models/User')
const mongoose = require('mongoose')
require('dotenv').config()

async function getPokemonsToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    const list = await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((r) => r.data.results)

    const result = []

    for (const i of list) {
      await axios.get(i.url).then(async ({ data }) => {
        const pokemon = new Pokemon({
            pokeId: data.id,
            stats: data.stats.map(el => {
              return {
                name: el.stat.name,
                base_stat: el.base_stat
              }
            }),
            spritesFront: data.sprites['front_default'],
            spritesBack: data.sprites['back_default'],
            abilities: data.abilities.map(el => el.ability.name),
            types: data.types.map(el => el.type.name),
            name: data.name,
            height: data.height,
            weight: data.weight,
            baseExperience: data.base_experience
          }
        )

        await pokemon.save()

        // result.push({
        //   id: data.id,
        //   stats: data.stats.map(el => {
        //     return {
        //       name: el.stat.name,
        //       base_stat: el.base_stat
        //     }
        //   }),
        //   spritesFront: data.sprites['front_default'],
        //   spritesBack: data.sprites['back_default'],
        //   abilities: data.abilities.map(el => el.ability.name),
        //   types: data.types.map(el => el.type.name),
        //   name: data.name,
        //   height: data.height,
        //   weight: data.weight,
        //   baseExperience: data.base_experience
        // })
      })
    }
  } catch (e) {
    process.exit(1)
  }
}

//getPokemonsToDb().finally(() => console.log('completed'))

async function updatePokemons() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    const list = await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((r) => r.data.results)

    console.time("Start")

    for (const i of list) {
      await axios.get(i.url).then(async ({ data }) => {
        const pokemon = Pokemon.findOneAndUpdate(
          { 'pokeId': data.id },
          {
            pokeId: data.id,
            stats: data.stats.map(el => {
              return {
                name: el.stat.name,
                base_stat: el.base_stat
              }
            }),
            spritesFront: data.sprites['front_default'],
            spritesBack: data.sprites['back_default'],
            abilities: data.abilities.map(el => el.ability.name),
            types: data.types.map(el => el.type.name),
            name: data.name,
            height: data.height,
            weight: data.weight,
            baseExperience: data.base_experience
          },
          { upsert: true, new: true },
          (err, doc) => {
            if (err) {
              console.log(err)
            }
          })
      })
    }

    console.timeEnd("Start")
  } catch (e) {
    process.exit(1)
  }
}

updatePokemons().finally(() => console.log('compl'))
