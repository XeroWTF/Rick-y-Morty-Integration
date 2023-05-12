import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/action";
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
  addFavorite,
  removeFavorite,
  myFavorites,
}) => {
  const [isFav, setFavs] = useState(false);

  const handleFavorites = () => {
    if (isFav) {
      removeFavorite(id);
    } else {
      addFavorite({ id, name, status, species, gender, origin, image });
    }
    setFavs(!isFav);
  };

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setFavs(isFavorite);
  }, [myFavorites, id]);

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
    addFavorite: (character) => dispatch(addFav(character)),
    removeFavorite: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
