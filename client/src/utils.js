export const createCardBgColor = pokemon => {
  const COLORS_AND_TYPES = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC'
  }

  if (pokemon.types.length >= 2) {
    return pokemon.types
      .map(a => {
        return COLORS_AND_TYPES[a]
      })
      .join(', ')
  } else {
    return COLORS_AND_TYPES[pokemon.types[0]]
  }
}

export const capitalizeFirstLetter = name => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
