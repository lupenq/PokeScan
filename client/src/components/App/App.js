import React, { useEffect, useState } from 'react'
import styles from './App.module.sass'
import { useDataStore } from '../../context'
import PokeCard from '../PokeCard/PokeCard'
import { observer } from 'mobx-react-lite'
import {
  capitalizeFirstLetter,
  createCardBgColor,
  getAbilitiesName,
  getFormLevel,
  getMainStats,
  getTypesName
} from '../../utils'
import { Header } from '../Header/Header'
import { Loader } from '../Loader/Loader'

export const App = observer(() => {
  const store = useDataStore()
  const {
    fetchPokemonsList,
    pokemonsData,
    loading
  } = store

  const [actualData, setActualData] = useState(pokemonsData)

  useEffect(() => {
    fetchPokemonsList()
  }, [fetchPokemonsList])

  useEffect(() => {
    setActualData(pokemonsData)
  }, [pokemonsData])

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
            name={capitalizeFirstLetter(i.name)}
            imageFront={i.sprites.front_default}
            imageBack={i.sprites.back_default}
            height={i.height}
            weight={i.weight}
            abilities={getAbilitiesName(i.abilities)}
            types={getTypesName(i.types)}
            bgColor={createCardBgColor(i.types)}
            stats={getMainStats(i.stats)}
            baseExperience={i.base_experience}
            formLevel={getFormLevel(i.forms)}
          />
        }) : <Loader count={20}/>}
      </div>
    </>
  )
})
