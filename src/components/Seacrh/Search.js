import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Search.module.sass'
import { useDataStore } from '../../context'

export const Search = observer(({ searchMethod }) => {
  const store = useDataStore();
  const {
    pokemonsData,
    search
  } = store;

  const [value, setValue] = useState('')

  const handleSearch = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    searchMethod(value)
  }, [value])

  return (
      <input
        placeholder='Just type'
        className={styles.input}
        id="search"
        type="text"
        onChange={handleSearch}
        autoComplete='off'
      />
  )
})
