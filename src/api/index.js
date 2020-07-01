import axios from 'axios'

const url = 'https://pokeapi.co/api/v2'


export const fetchPokemonsList = async () => {
  try {
    const { count, next, previous, results } = await axios.get(`${url}/pokemon`)

    return {
      count, next, previous, results
    }
  } catch (e) {
    console.log(e)
  }
}
