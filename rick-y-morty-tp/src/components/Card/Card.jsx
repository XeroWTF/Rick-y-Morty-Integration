import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const isFavorite = myFavorites.some((fav) => fav.id === id);
  const [isFav, setFav] = useState(isFavorite);

  useEffect(() => {
    setFav(isFavorite);
  }, [isFavorite]);

  const handleFavorites = () => {
    if (isFav) {
      removeFav(id);
      setFav(false);
    } else {
      addFav({ id, name, status, species, gender, origin, image });
      setFav(true);
    }
  };

  return (
    <div className={styles.contenedor}>
      <button onClick={handleFavorites}>{isFav ? "❤️" : "🤍"}</button>
      <button onClick={onClose}>X</button>
      <Link to={`/detail/${id}`}>
        <h1 style={{ color: "white" }}>{name}</h1>
      </Link>
      <img src={image} alt="" />
      <h2>Species: {species}</h2>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
