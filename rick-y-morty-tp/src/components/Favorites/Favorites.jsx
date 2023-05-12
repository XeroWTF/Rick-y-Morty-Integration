import { connect } from "react-redux";
import Card from "../Card/Card";
import { addFav, removeFav } from "../Redux/action";

const Favorites = ({ myFavorites, removeFav }) => {
    const handleRemoveFavorite = (id) => {
      removeFav(id);
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

export default connect(mapStateToProps, { removeFav, addFav })(Favorites);

