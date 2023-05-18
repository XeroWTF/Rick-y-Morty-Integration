import Card from '../Card/Card';
import styles from "./Cards.module.css"

const Cards = ({ characters, onClose, addFavorite, removeFavorite, myFavorites }) => {
  return (
    <div className={styles.contenedor}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => (
        <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          onClose={() => onClose(id)}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          myFavorites={myFavorites}
        />
      ))}
    </div>
  );
};

export default Cards;
