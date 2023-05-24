import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards } from "../../Redux/action";
import styles from "./Favorites.module.css";

const Favorites = ({ myFavorites, removeFavorite }) => {

  const dispatch = useDispatch();

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    event.target.selectedIndex = 0; 
  };
  
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    event.target.selectedIndex = 0; 
  };
  

  return (
    <div>
      <div className={styles.filters}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="">Todos</option>
          <option value="Male">Hombres</option>
          <option value="Female">Mujeres</option>
          <option value="Genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      <div className={styles.cards}>
        {myFavorites.map(({ id, name, status, species, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={() => handleRemoveFavorite(id)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
