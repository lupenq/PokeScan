import { fetchPokemonData, fetchPokemonsList } from './api'

export function createStore() {
  return {
    pokemonsList: [],
    pokemonsData: [],
    pokemonsCount: 0,
    perTitle: 20,
    prevUrl: '',
    nextUrl: '',
    loading: false,
    async fetchPokemonsList(url) {
      this.loading = true
      if (url) {
        this.pokemonsList = await fetchPokemonsList(url).then(r => {
          this.prevUrl = r.previous
          this.nextUrl = r.next
          this.pokemonsCount = r.count
          return r.results
        })
      } else {
        this.pokemonsList = await fetchPokemonsList(null, this.perTitle).then(r => {
          this.prevUrl = r.previous
          this.nextUrl = r.next
          this.pokemonsCount = r.count
          return r.results
        })
      }
      const arr = []
      for (const i of this.pokemonsList) {
        await fetchPokemonData(i.url).then(r => {
          arr.push(r.data)
        })
      }

      this.pokemonsData = arr
      this.loading = false
    },
    search(value) {
      this.pokemonsData = this.pokemonsData.filter(a => {
        return a.name.match(value)
      })
    },
    setShowPerTitle(value) {
      this.perTitle = value
    }
    // async fetchPokemonsCount() {
    //   this.pokemonsCount = await fetchPokemonsList().then(r => r.count)
    // },
  };
}
