import React, { useEffect, useState } from 'react'
import styles from './Pagination.module.sass'
import { observer } from 'mobx-react-lite'
import { useDataStore } from '../../context'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Selector } from '../Selector/Selector'

export const Pagination = observer(() => {
  const [pageValue, setPageValue] = useState(1)

  const store = useDataStore()
  const {
    perPage,
    loading,
    pokemonsCount,
    pagLeft,
    pagRight,
    actualPage,
    setActualPage
  } = store

  useEffect(() => {
    setPageValue(actualPage)
  }, [actualPage])

  const getMaxPage = () => {
    return Math.ceil(pokemonsCount / perPage)
  }

  const changeInputHandler = (e) => {
    if (e.target.value === '0') {
      setPageValue(1)
    } else if (e.target.value > getMaxPage()) {
      setPageValue(getMaxPage())
    } else {
      setPageValue(+e.target.value)
    }
  }

  const onKeyPressInputHandler = (e) => {
    if (e.target.value === '0' && e.key === 'Enter') {
      setPageValue(1)
      setActualPage(1)
    } else if (e.target.value > getMaxPage() && e.key === 'Enter') {
      setPageValue(getMaxPage())
      setActualPage(getMaxPage())
    } else {
      e.key === 'Enter' && setActualPage(pageValue)
    }
  }
  const onBlurInputHandler = (e) => {
    if (e.target.value === '0') {
      setPageValue(1)
      setActualPage(pageValue)
    } else if (e.target.value > getMaxPage()) {
      setPageValue(getMaxPage())
    } else {
      setActualPage(pageValue)
    }
  }

  return (
    <div className={styles.container}>
      <Selector/>
      <LeftCircleOutlined
        component='button'
        style={{
          pointerEvents: loading || actualPage === 1 ? 'none' : null,
          opacity: actualPage === 1 && 0.2
        }}
        className={styles.button}
        onClick={() => {
          pagLeft()
        }}
      />
      {
        <input
          type="number"
          value={pageValue}
          min={1}
          max={Math.ceil(pokemonsCount / perPage)}
          onChange={changeInputHandler}
          onKeyPress={onKeyPressInputHandler}
          onBlur={onBlurInputHandler}
          className={styles.page_input}
        />
      }
      <p
        className={styles.numbers}
      >
        of {getMaxPage()}
      </p>
      <RightCircleOutlined
        style={{
          pointerEvents: loading || actualPage >= getMaxPage() ? 'none' : null,
          opacity: actualPage >= getMaxPage() && 0.2
        }}
        component='button'
        className={styles.button}
        onClick={() => {
          pagRight()
        }}
      />
    </div>
  )
})
