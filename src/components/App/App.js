import React, { useEffect, useState } from 'react';
import styles from './App.module.sass'
import { useDataStore } from '../../context';
import PokeCard from '../PokeCard/PokeCard'
import { observer } from 'mobx-react-lite'
import { createCardBgColor, getAbilitiesName, getFormLevel, getMainStats, getTypesName } from '../../utils'
import { toJS } from 'mobx'
import { Header } from '../Header/Header'
import { Loader } from '../Loader/Loader'
import { Sceleton } from '../Sceleton/Skeleton'

export const App = observer(() => {
  const store = useDataStore();
  const {
    fetchPokemonsCount,
    fetchPokemonsList,
    pokemonsList,
    pokemonsCount,
    pokemonsData,
    loading
  } = store;

  const [actualData, setActualData] = useState(pokemonsData)

  useEffect(() => {
    fetchPokemonsList()
    setActualData(pokemonsData)
  }, [])

  useEffect(() => {
    setActualData(pokemonsData)
  }, [pokemonsData])

  const searchByName = (value) => {
    setActualData(pokemonsData.filter(a => {
      return a.name.match(value)
    }))
  }

  return (
    <>
      <Header search={searchByName}/>
      <div className={styles.container}>

        {!loading ? actualData.map(i => {
          return <PokeCard
            key={i.id}
            name={i.name}
            imageFront={i.sprites['front_default']}
            imageBack={i.sprites['back_default']}
            height={i.height}
            weight={i.weight}
            abilities={getAbilitiesName(i.abilities)}
            types={getTypesName(i.types)}
            bgColor={createCardBgColor(i.types)}
            stats={getMainStats(i.stats)}
            baseExperience={i['base_experience']}
            formLevel={getFormLevel(i.forms)}
          />
        }) : <Loader count={actualData.length} />}
      </div>
    </>
  )
});
