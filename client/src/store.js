import { fetchPokemonsCount, fetchPokemonsList } from './api'

export function createStore () {
  return {
    pokemonsList: [],
    perPage: 20,
    prevPage: 0,
    actualPage: 1,
    loading: false,
    pokemonsCount: 0,
    searchValue: '',
    async fetchPokemons () {
      this.loading = true

      this.pokemonsList = await fetchPokemonsList().then((res) => {
        this.loading = false
        return res.data
      })
    },
    setPokemnsCount (value) {
      this.pokemonsCount = value
    },
    setActualPage (value) {
      this.actualPage = value
    },
    setPerPage (value) {
      this.setActualPage(1)
      this.perPage = +value
    },
    pagLeft () {
      this.actualPage--
    },
    pagRight () {
      this.actualPage++
    },
    async getCount () {
      this.pokemonsCount = await fetchPokemonsCount().then(res => res.data)
    },
    setSearchValue (value) {
      this.setActualPage(1)
      this.searchValue = value
    }
  }
}
