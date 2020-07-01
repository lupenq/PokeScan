import React from 'react'
import styles from '../Sceleton/Sceleton.module.sass'

export const Sceleton = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.card}>
        <div className={styles.front}>
          <div className={styles.header}>
            <div className={styles.header_top}>
              <div className={styles.image} />
              <h2 className={styles.name}>Qweqwe</h2>
            </div>

            <div>
            <div className={styles.header_bot}>
              <p className={styles.stats}>❤️ 10</p>
              <p className={styles.stats}>🗡️ 20</p>
              <p className={styles.stats}>🛡️ 30</p>
            </div>
            <div className={styles.header_bot}>
              <p className={styles.stats}>💨 10</p>
              <p className={styles.stats}>⚔️ 20</p>
              <p className={styles.stats}>🔰 30</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
