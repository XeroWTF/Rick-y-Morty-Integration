import styles from "./Card.module.css"
import { Link } from "react-router-dom";


const Card = ({id, name, status, species, gender, origin, image, onClose}) =>
{
   return (
      <div className ={styles.contenedor}>
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

export default Card


