import React from 'react'
import { observer } from 'mobx-react-lite'
import styles from './Loader.module.sass'
import { Sceleton } from '../Sceleton/Skeleton'

export const Loader = observer(({ count }) => {
  return (
    <>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
      <Sceleton/>
    </>
  )
})
