import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './PokeCard.module.sass'

const PokeCard = observer(({ name, image }) => {
  // const [query, setQuery] = useState("");
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image}/>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
      </div>
    </div>
  );
});

export default PokeCard;
