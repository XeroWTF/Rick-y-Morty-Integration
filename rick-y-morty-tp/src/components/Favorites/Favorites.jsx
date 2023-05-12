import { connect } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../Redux/actions";

const Favorites = ({ myFavorites, removeFavorite }) => {
  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  return (
    <div>
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
          onClose={() => handleRemoveFavorite(id)} // Pasar la función onClose con el id correspondiente
        />
      ))}
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
