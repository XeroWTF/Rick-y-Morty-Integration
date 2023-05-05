import Card from '../Card/Card';
import style from "./Cards.module.css"


const Cards = ({ characters }) => {
   return (
      <div classname={style.contenedor}>
      {
         characters.map(({id, name, status, species, gender, origin, image, onClose}) => {
            return(
               <Card 
               key={id} 
               id={id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               onClose={() => alert('Emulamos que se cierra la card')}
               />
            )
         })
      }
      </div>
   )
}

export default Cards
