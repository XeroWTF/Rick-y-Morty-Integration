import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/action";
import { connect } from "react-redux"
import { useState, useEffect } from "react";


const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) =>
{

   const [isFav, setFavs] = useState(false);

   const handleFavorites = (id) => {
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image})
      setFavs(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);
 
   return (
      <div className ={styles.contenedor}>
         {
           (
               <button onClick={handleFavorites}>{isFav ? "❤️" : "🤍"}</button>
            )
         }
         <button onClick={onClose} >X</button>
        <Link to= {`/detail/${id}`} >
         <h1 style={{color: "white"}}>{name}</h1>         
        </Link>
         <img src={image} alt='' /> 
         <h2> Species: {species}</h2>
         {/* <h2>Origin: {origin}</h2> */}
         {/* <h2>Gender: {gender}</h2> */}
         {/* <h2>Status: {status}</h2>  */}
         {/* <h2>Origin: {origin}</h2> */}
      </div>
   );

}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
       myFavorites: state.myFavorites
   }
}

export default connect (null, mapDispatchToProps)(Card);


