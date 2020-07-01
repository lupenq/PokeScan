export const capitalizeFirstLetterArray = (arr) => {
  return arr.forEach(i => i.charAt(0).toUpperCase() + i.slice(1))
}

export const getAbilitiesName = abilities => {
  const arr = []
  abilities.forEach(a => {
    return arr.push(a.ability.name)
  })
  return arr.join(', ')
}

export const getTypesName = types => {
  const arr = []
  types.forEach(a => {
    return arr.push(a.type.name)
  })
  return arr.join(', ')
}

export const createCardBgColor = types => {
  const colorsAndTypes = {
    'normal': '#A8A878',
    'fighting': '#C03028',
    'flying': '#A890F0',
    'poison': '#A040A0',
    'ground': '#E0C068',
    'rock': '#B8A038',
    'bug': '#A8B820',
    'ghost': '#705898',
    'steel': '#B8B8D0',
    'fire': '#F08030',
    'water': '#6890F0',
    'grass': '#78C850',
    'electric': '#F8D030',
    'psychic': '#F85888',
    'ice': '#98D8D8',
    'dragon': '#7038F8',
    'dark': '#705848',
    'fairy': '#EE99AC'
  }

  if (types.length >= 2) {
    return types
      .map(a => {
        return colorsAndTypes[a.type.name]
      })
      .join(', ')
  } else {
    return colorsAndTypes[types[0].type.name]
  }
}

export const getFormLevel = forms => {
  console.log(forms[0].url.split('/'))
  return forms[0].url.split('/')[forms.length-1]
}

export const getMainStats = stats => {
  const obj = {}

  stats.forEach(i => obj[i.stat.name] = i.base_stat)
  return obj

  // return stats.filter(i => {
  //   return {[i.stat.name]: i.base_stat}
  // })
}
