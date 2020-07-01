import axios from 'axios'

const url = 'https://pokeapi.co/api/v2'

export const fetchPokemonsList = async (pagUrl, limit = 20, offset = 0) => {
  try {
    if (pagUrl) {

      const { data: { count, next, previous, results } } = await axios.get(
        `${pagUrl}`
      )

      return { count, next, previous, results }

    } else {

      const { data: { count, next, previous, results } } = await axios.get(
        `${url}/pokemon?offset=${offset}&limit=${limit}`
      )

      return { count, next, previous, results }

    }
  } catch (e) {
    console.log(e)
  }
}

export const fetchPokemonData = async (pokemon) => {
  try {
    const data = await axios.get(`${pokemon}`)

    return data
  } catch (e) {
    console.log(e)
  }
}
