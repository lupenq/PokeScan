import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './PokeCard.module.sass'

const PokeCard = observer((
  {
    name, imageFront, imageBack,
    height, weight, abilities,
    types, bgColor, stats,
    baseExperience, formLevel
  }
) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.container} ${open ? styles.hover : ''}`}>
      <div className={styles.card} style={{
        background: bgColor.match(', ') ? `linear-gradient(60deg, ${bgColor})` : bgColor
      }}>
        <div className={styles.front}>
          <div className={styles.header} onClick={() => setOpen(!open)}>
            <div className={styles.header_top}>
              <img src={imageFront} alt="" className={styles.image}/>
              <h2 className={styles.name}>{name}</h2>
            </div>

            <div>
              <div className={styles.header_bot}>
                <p className={styles.stats}>❤️ {stats.hp}</p>
                <p className={styles.stats}>🗡️ {stats.attack}</p>
                <p className={styles.stats}>🛡️ {stats.defense}</p>
              </div>
              <div className={styles.header_bot}>
                <p className={styles.stats}>💨 {stats.speed}</p>
                <p className={styles.stats}>⚔️ {stats['special-attack']}</p>
                <p className={styles.stats}>🔰 {stats['special-defense']}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.back} onClick={() => setOpen(!open)}>
          <div className={styles.header} onClick={() => setOpen(!open)}>
            <div className={styles.header_top}>
              <img src={imageBack} alt="" className={styles.image}/>
              <h2 className={styles.name}>{name}</h2>
            </div>
          </div>
          <table className={styles.table}>
            <tbody>
            <tr className={styles.row}>
              <th className={styles.cell}>Type</th>
              <th className={styles.cell}>{types}</th>
            </tr>
            <tr className={styles.row}>
              <th className={styles.cell}>Base experience</th>
              <th className={styles.cell}>{baseExperience}</th>
            </tr>
            <tr className={styles.row}>
              <th className={styles.cell}>Weight</th>
              <th className={styles.cell}>{weight}</th>
            </tr>
            <tr className={styles.row}>
              <th className={styles.cell}>Height</th>
              <th className={styles.cell}>{height}</th>
            </tr>
            <tr className={styles.row}>
              <th className={styles.cell}>Abilities</th>
              <th className={styles.cell}>{abilities}</th>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default PokeCard;
