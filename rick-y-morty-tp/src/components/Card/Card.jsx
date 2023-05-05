import styles from "./Card.module.css"

const Card = ({id, name, status, species, gender, origin, image, onClose}) =>
{
   return (
      <div className ={styles.contenedor}>
         <h1>{name}</h1>         
         <img src={image} alt='' /> 
         <h2> Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Status: {status}</h2>
         <h2>Origin: {origin}</h2>
         <button onClick={onClose}>Funar</button>
      </div>
   );
}

export default Card