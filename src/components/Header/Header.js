import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Header.module.sass'
import { Search } from '../Seacrh/Search'
import { PerTitleSelector } from '../PerTitleSelector/PerTitleSelector'
import { Pagination } from '../Pagination/Pagination'
import { Logo } from '../Logo/Logo'

export const Header = observer(({ search }) => {
  return (
    <div className={styles.header}>
      <Search searchMethod={search}/>
      <Logo />
      <Pagination/>
    </div>
  )
})
