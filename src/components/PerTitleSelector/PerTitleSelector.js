import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
// import styles from './Header.module.sass'
import { Search } from '../Seacrh/Search'
import { useDataStore } from '../../context'

export const PerTitleSelector = observer(() => {
  const store = useDataStore();
  const {
    setShowPerTitle
  } = store;

  const [value, setValue] = useState(20)

  const handleSelect = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    setShowPerTitle(value)
  }, [value])

  return (
    <select onChange={handleSelect}>
      <option>30</option>
      <option>20</option>
      <option>30</option>
    </select>
  )
})
