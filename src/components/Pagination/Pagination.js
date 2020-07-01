import React from 'react'
import styles from './Pagination.module.sass'
import { observer } from 'mobx-react-lite'
import { useDataStore } from '../../context'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'

export const Pagination = observer(() => {
  const store = useDataStore()
  const {
    fetchPokemonsList,
    nextUrl,
    prevUrl,
    loading
  } = store

  return (
    <div className={styles.container}>
      <LeftCircleOutlined
        component='button'
        style={{
          pointerEvents: loading || !prevUrl ? 'none' : null,
          opacity: !prevUrl && 0.2
        }}
        className={styles.button}
        onClick={() => fetchPokemonsList(prevUrl)}
      />
      <RightCircleOutlined
        style={{ pointerEvents: loading && 'none' }}
        component='button'
        className={styles.button}
        onClick={() => fetchPokemonsList(nextUrl)}
      />
    </div>
  )
})
